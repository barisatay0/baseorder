import {company} from "../db/companyModel.js";
import db from "../db/index.js";
import type {Context} from "hono";
import {eq} from "drizzle-orm";

export const index = () => {
    return db.select().from(company);
};

export const create = async (c: Context) => {
    const data = await c.req.json();
    return db.insert(company).values(data);
};

export const read = async (c: Context) => {
    const data = +c.req.param("id");
    return db.select().from(company).where(eq(company.id, data));
};

export const update = async (c: Context) => {
    const id = +c.req.param("id");
    const data = await c.req.json();
    return db.update(company).set(data).where(eq(company.id, id));
};

export const remove = async (c: Context) => {
    const data = +c.req.param("id");
    return db.delete(company).where(eq(company.id, data));
};
