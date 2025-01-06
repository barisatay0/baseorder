import {photo} from "../db/photoModel.js";
import db from "../db/index.js";
import type {Context} from "hono";
import {eq} from "drizzle-orm";

// This page going to be updated

export const index = () => {
    return db.select().from(photo);
};

export const create = async (c: Context) => {
    const data = await c.req.json();
    return db.insert(photo).values(data);
};

export const read = async (c: Context) => {
    const data = +c.req.param("id");
    return db.select().from(photo).where(eq(photo.id, data));
};

export const update = async (c: Context) => {
    const id = +c.req.param("id");
    const data = await c.req.json();
    return db.update(photo).set(data).where(eq(photo.id, id));
};

export const remove = async (c: Context) => {
    const data = +c.req.param("id");
    return db.delete(photo).where(eq(photo.id, data));
};
