import {index, create, read, update, remove} from '../services/categoryService.js';
import type {Context} from "hono";

export const indexController = async (c: Context) => {
    try {
        const categories = await index();
        return c.json(categories, 200);
    } catch (error) {
        console.error('Error fetching categories:', error);
        return c.json({message: 'Failed to fetch categories'}, 500);
    }
};

export const createController = async (c: Context) => {
    try {
        const category = await create(c);
        return c.json(category, 200);
    } catch (error) {
        console.error('Error creating category:', error);
        return c.json({message: 'Failed to create category'}, 500);
    }
};

export const readController = async (c: Context) => {
    try {
        const category = await read(c);
        return c.json(category, 200);
    } catch (error) {
        console.error('Error fetching category:', error);
        return c.json({message: 'Failed to fetch category'}, 500);
    }
};

export const updateController = async (c: Context) => {
    try {
        const category = await update(c);
        return c.json(category, 200);
    } catch (error) {
        console.error('Error updating category:', error);
        return c.json({message: 'Failed to update category'}, 500);
    }
};

export const deleteController = async (c: Context) => {
    try {
        const category = await remove(c);
        return c.json(category, 200);
    } catch (error) {
        console.error('Error deleting category:', error);
        return c.json({message: 'Failed to delete category'}, 500);
    }
};
