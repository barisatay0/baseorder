import ItemService from '../services/itemService.js';
import type {Context} from "hono";
import {ZodError} from "zod";
import {itemValidation} from "../validation/itemValidation.js";

export const indexController = async (c: Context) => {
    try {
        const items = await ItemService.index();
        return c.json(items, 200);
    } catch (error) {
        console.error('Error fetching items:', error);
        return c.json({message: 'Failed to fetch items'}, 500);
    }
};

export const createController = async (c: Context) => {
    try {
        const requestBody = await c.req.json();
        itemValidation.parse(requestBody);
        return c.json(await ItemService.create(c), 200);
    } catch (error) {
        if (error instanceof ZodError) {return c.json({ message: 'Validation failed', errors: error.errors }, 400);}
        return c.json({ message: 'Failed to create item' }, 500);
    }
};

export const readController = async (c: Context) => {
    try {
        const items = await ItemService.read(c);
        return c.json(items, 200);
    } catch (error) {
        console.error('Error fetching item:', error);
        return c.json({message: 'Failed to fetch item'}, 500);
    }
};

export const updateController = async (c: Context) => {
    try {
        const items = await ItemService.update(c);
        return c.json(items, 200);
    } catch (error) {
        console.error('Error updating item:', error);
        return c.json({message: 'Failed to update item'}, 500);
    }
};

export const deleteController = async (c: Context) => {
    try {
        const items = await ItemService.delete(c);
        return c.json(items, 200);
    } catch (error) {
        console.error('Error deleting item:', error);
        return c.json({message: 'Failed to delete item'}, 500);
    }
};
