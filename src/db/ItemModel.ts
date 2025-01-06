import {boolean, decimal, integer, pgTable, varchar} from "drizzle-orm/pg-core";

export const item = pgTable("tb_item", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    category_id: integer().notNull(),
    photo_id: integer().notNull(),
    item_status: boolean(),
    item_name: varchar({length: 255}).notNull(),
    item_price: decimal().notNull(),
    item_description: varchar({length: 255}).notNull(),
    item_specification: varchar({length: 255}).notNull(),
});

