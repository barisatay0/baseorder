import { index } from '../services/itemService.js';
import type { Context } from "hono";

export const items = async (c: Context) => {
    try {
        const items = await index();
        return c.json(items, 200);
    } catch (error) {
        console.error('Error fetching items:', error);
        return c.json({ message: 'Failed to fetch items' }, 500);
    }
};
