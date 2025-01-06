import {index, create, read, update, remove} from '../services/companyService.js';
import type {Context} from "hono";

export const indexController = async (c: Context) => {
    try {
        const company = await index();
        return c.json(company, 200);
    } catch (error) {
        console.error('Error fetching companies:', error);
        return c.json({message: 'Failed to fetch companies'}, 500);
    }
};

export const createController = async (c: Context) => {
    try {
        const company = await create(c);
        return c.json(company, 200);
    } catch (error) {
        console.error('Error creating company:', error);
        return c.json({message: 'Failed to create company'}, 500);
    }
};

export const readController = async (c: Context) => {
    try {
        const company = await read(c);
        return c.json(company, 200);
    } catch (error) {
        console.error('Error fetching company:', error);
        return c.json({message: 'Failed to fetch company'}, 500);
    }
};

export const updateController = async (c: Context) => {
    try {
        const company = await update(c);
        return c.json(company, 200);
    } catch (error) {
        console.error('Error updating company:', error);
        return c.json({message: 'Failed to update company'}, 500);
    }
};

export const deleteController = async (c: Context) => {
    try {
        const company = await remove(c);
        return c.json(company, 200);
    } catch (error) {
        console.error('Error deleting company:', error);
        return c.json({message: 'Failed to delete company'}, 500);
    }
};
