import {integer, pgTable, timestamp, varchar} from "drizzle-orm/pg-core";

export const photo = pgTable("tb_photo", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    photo_path: varchar().notNull(),
    photo_extension: varchar(),
    created_at: timestamp('created_at').notNull().defaultNow(),
});