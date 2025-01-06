import {category} from "../db/categoryModel.js";
import db from "../db/index.js";
import type {Context} from "hono";
import {eq} from "drizzle-orm";

export const index = () => {
    return db.select().from(category);
};

export const create = async (c: Context) => {
    const data = await c.req.json();
    return db.insert(category).values(data);
};

export const read = async (c: Context) => {
    const data = +c.req.param("id");
    return db.select().from(category).where(eq(category.id, data));
};

export const update = async (c: Context) => {
    const id = +c.req.param("id");
    const data = await c.req.json();
    return db.update(category).set(data).where(eq(category.id, id));
};

export const remove = async (c: Context) => {
    const data = +c.req.param("id");
    return db.delete(category).where(eq(category.id, data));
};
