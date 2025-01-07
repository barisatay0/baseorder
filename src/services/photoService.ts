import {photo} from "../db/photoModel.js";
import db from "../db/index.js";
import type {Context} from "hono";
import {eq} from "drizzle-orm";

class PhotoService {
    static index = async () => {
        return db.select().from(photo);
    }

    static async create(c: Context) {
        // Create function going to be updated
        const data = await c.req.json();
        return db.insert(photo).values(data);
    }

    static async read(c: Context) {
        const data = +c.req.param("id");
        return db.select().from(photo).where(eq(photo.id, data));
    }

    static async update(c: Context) {
        // Update function going to be updated
        const id = +c.req.param("id");
        const data = await c.req.json();
        return db.update(photo).set(data).where(eq(photo.id, id));
    }

    static async delete(c: Context) {
        // Delete function going to be updated
        const data = +c.req.param("id");
        return db.delete(photo).where(eq(photo.id, data));
    }
}

export default PhotoService;