import { item } from "../db/itemModel.js";
import db from "../db/index.js";
import type { Context } from "hono";
import { eq } from "drizzle-orm";

class ItemService {
    static index() {
        return db.select().from(item);
    }

    static async create(c: Context) {
        const data = await c.req.json();
        return db.insert(item).values(data);
    }

    static async read(c: Context) {
        const data = +c.req.param("id");
        return db.select().from(item).where(eq(item.id, data));
    }

    static async update(c: Context) {
        const id = +c.req.param("id");
        const data = await c.req.json();
        return db.update(item).set(data).where(eq(item.id, id));
    }

    static async delete(c: Context) {
        const data = +c.req.param("id");
        return db.delete(item).where(eq(item.id, data));
    }
}

export default ItemService;