import {boolean, decimal, integer, pgTable, varchar} from "drizzle-orm/pg-core";

export const photo = pgTable("tb_photo", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    photo_paths: varchar().notNull(),
    placeholder_photo_path: varchar().notNull(),
    photo_description: varchar()
});