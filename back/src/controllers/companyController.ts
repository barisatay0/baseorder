import {CreateValidation,UpdateValidation} from "../validations/companyValidation.js";
import CompanyService from '../services/companyService.js';
import type {Context} from "hono";
import {ZodError} from "zod";

export const indexController = async (c: Context) => {
    try {
        const company = await CompanyService.index();
        return c.json(company, 200);
    } catch (error) {
        console.error('Error fetching companies:', error);
        return c.json({message: 'Failed to fetch companies'}, 500);
    }
};

export const createController = async (c: Context) => {
    try {
        const requestBody = await c.req.json();
        CreateValidation.parse(requestBody);
        return c.json(await CompanyService.create(c), 200);
    } catch (error) {
        if (error instanceof ZodError) {return c.json({ message: 'Validation failed', errors: error.errors }, 400);}
        return c.json({ message: 'Failed to create company' }, 500);
    }
};

export const readController = async (c: Context) => {
    try {
        const company = await CompanyService.read(c);
        return c.json(company, 200);
    } catch (error) {
        console.error('Error fetching company:', error);
        return c.json({message: 'Failed to fetch company'}, 500);
    }
};

export const updateController = async (c: Context) => {
    try {
        const requestBody = await c.req.json();
        UpdateValidation.parse(requestBody);
        const updatedCompany = await CompanyService.update(c);
        return c.json(updatedCompany, 200);
    } catch (error) {
        if (error instanceof ZodError) {
            return c.json({ message: 'Validation failed', errors: error.errors }, 400);
        }
        console.error('Error updating company:', error);
        return c.json({ message: 'Failed to update company' }, 500);
    }
};

export const deleteController = async (c: Context) => {
    try {
        const company = await CompanyService.delete(c);
        return c.json(company, 200);
    } catch (error) {
        console.error('Error deleting company:', error);
        return c.json({message: 'Failed to delete company'}, 500);
    }
};
