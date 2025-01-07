import {category} from "../db/categoryModel.js";
import db from "../db/index.js";
import type {Context} from "hono";
import {eq} from "drizzle-orm";

class CategoryService {
    static async index() {
        return db.select().from(category);
    }

    static async create(c: Context) {
        const data = await c.req.json();
        return db.insert(category).values(data);
    }

    static async read(c: Context) {
        const data = +c.req.param("id");
        return db.select().from(category).where(eq(category.id, data));
    }

    static async update(c: Context) {
        const id = +c.req.param("id");
        const data = await c.req.json();
        return db.update(category).set(data).where(eq(category.id, id));
    }

    static async delete(c: Context) {
        const data = +c.req.param("id");
        return db.delete(category).where(eq(category.id, data));
    }

}

export default CategoryService;