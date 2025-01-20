import { photo } from "../db/photoModel.js";
import db from "../db/index.js";
import type { Context } from "hono";
import { eq } from "drizzle-orm";
import * as path from "node:path";
import * as fs from "node:fs";

const validExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

class PhotoService {
    static async index() {
        return db.select().from(photo);
    }

    static async create(c: Context) {
        const storageDir = path.resolve('./storage');
        fs.mkdirSync(storageDir, { recursive: true });

        const { file } = await c.req.parseBody<{ file: File }>();
        if (!file) throw new Error("No file provided");

        const ext = path.extname(file.name).toLowerCase();
        if (!validExtensions.includes(ext)) {
            throw new Error("Invalid file extension. Only .jpg, .jpeg, .png, .webp are allowed");
        }

        const uniqueName = `${Date.now()}-${file.name}`;
        const filePath = path.join(storageDir, uniqueName);

        fs.writeFileSync(filePath, Buffer.from(await file.arrayBuffer()));

        const [newPhoto] = await db.insert(photo).values({
            photo_path: uniqueName,
            photo_extension: ext,
        }).returning();

        return newPhoto;
    }

    static async read(c: Context) {
        const id = +c.req.param("id");
        return db.select().from(photo).where(eq(photo.id, id));
    }

    static async update(c: Context) {
        const id = +c.req.param("id");
        const { file } = await c.req.parseBody<{ file: File }>();

        const [photoRecord] = await db
            .select({ path: photo.photo_path })
            .from(photo)
            .where(eq(photo.id, id));

        if (photoRecord) {
            const ext = path.extname(file.name).toLowerCase();
            if (!validExtensions.includes(ext)) {
                throw new Error("Invalid file extension. Only .jpg, .jpeg, .png, .webp are allowed");
            }

            const oldPhotoPath = path.resolve('./storage', photoRecord.path);
            fs.existsSync(oldPhotoPath) && fs.unlinkSync(oldPhotoPath);

            const uniqueName = `${Date.now()}-${file.name}`;
            const filePath = path.resolve('./storage', uniqueName);
            fs.writeFileSync(filePath, Buffer.from(await file.arrayBuffer()));

            return db
                .update(photo)
                .set({ photo_path: uniqueName, photo_extension: ext })
                .where(eq(photo.id, id))
                .returning()
                .then(([updatedPhoto]) => updatedPhoto);
        }

        return null;
    }

    static async delete(c: Context) {
        const id = +c.req.param("id");
        const photoRecord = await db
            .select({ path: photo.photo_path })
            .from(photo)
            .where(eq(photo.id, id))
            .limit(1);

        if (photoRecord.length > 0) {
            const photoPath = path.resolve('./storage', photoRecord[0].path);

            if (fs.existsSync(photoPath)) {
                fs.unlinkSync(photoPath);
            }
        }

        return db.delete(photo).where(eq(photo.id, id));
    }
}

export default PhotoService;
