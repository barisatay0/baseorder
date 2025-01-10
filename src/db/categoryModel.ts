import {integer, pgTable, timestamp, varchar} from "drizzle-orm/pg-core";

export const category = pgTable("tb_category", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    photo_id: integer(),
    category_name: varchar().notNull(),
    category_description: varchar().notNull(),
    created_at: timestamp('created_at').notNull().defaultNow(),
});