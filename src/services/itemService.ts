import { item } from "../db/ItemModel.js";
import db from "../db/index.js";

export const index = () => {
    return db.select().from(item);
};
