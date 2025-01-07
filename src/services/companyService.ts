import {company} from "../db/companyModel.js";
import db from "../db/index.js";
import type {Context} from "hono";
import {eq} from "drizzle-orm";

class CompanyService {
    static async index() {
        return db.select().from(company);
    }

    static async create(c: Context) {
        const data = await c.req.json();
        return db.insert(company).values(data);
    }

    static async read(c: Context) {
        const data = +c.req.param("id");
        return db.select().from(company).where(eq(company.id, data));
    }

    static async update(c: Context) {
        const id = +c.req.param("id");
        const data = await c.req.json();
        return db.update(company).set(data).where(eq(company.id, id));
    }

    static async delete(c: Context) {
        const data = +c.req.param("id");
        return db.delete(company).where(eq(company.id, data));
    }
}

export default CompanyService;