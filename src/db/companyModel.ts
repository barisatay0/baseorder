import {point, integer, pgTable, varchar} from "drizzle-orm/pg-core";

export const company = pgTable("tb_company", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    photo_id: integer().notNull(),
    company_name: varchar().notNull(),
    company_address: point(),
    company_phone: varchar(),
    company_email: varchar(),
});