import {index, create, read, update, remove} from '../services/itemService.js';
import type {Context} from "hono";

export const indexController = async (c: Context) => {
    try {
        const items = await index();
        return c.json(items, 200);
    } catch (error) {
        console.error('Error fetching items:', error);
        return c.json({message: 'Failed to fetch items'}, 500);
    }
};

export const createController = async (c: Context) => {
    try {
        const items = await create(c);
        return c.json(items, 200);
    } catch (error) {
        console.error('Error creating item:', error);
        return c.json({message: 'Failed to create item'}, 500);
    }
};

export const readController = async (c: Context) => {
    try {
        const items = await read(c);
        return c.json(items, 200);
    } catch (error) {
        console.error('Error fetching item:', error);
        return c.json({message: 'Failed to fetch item'}, 500);
    }
};

export const updateController = async (c: Context) => {
    try {
        const items = await update(c);
        return c.json(items, 200);
    } catch (error) {
        console.error('Error updating item:', error);
        return c.json({message: 'Failed to update item'}, 500);
    }
};

export const deleteController = async (c: Context) => {
    try {
        const items = await remove(c);
        return c.json(items, 200);
    } catch (error) {
        console.error('Error deleting item:', error);
        return c.json({message: 'Failed to delete item'}, 500);
    }
};
