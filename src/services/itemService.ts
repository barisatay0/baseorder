import {item} from "../db/itemModel.js";
import db from "../db/index.js";
import type {Context} from "hono";
import {eq} from "drizzle-orm";

export const index = () => {
    return db.select().from(item);
};

export const create = async (c: Context) => {
    const data = await c.req.json();
    return db.insert(item).values(data);
};

export const read = async (c: Context) => {
    const data = +c.req.param("id");
    return db.select().from(item).where(eq(item.id, data));
};

export const update = async (c: Context) => {
    const id = +c.req.param("id");
    const data = await c.req.json();
    return db.update(item).set(data).where(eq(item.id, id));
};

export const remove = async (c: Context) => {
    const data = +c.req.param("id");
    return db.delete(item).where(eq(item.id, data));
};
