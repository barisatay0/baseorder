import {CreateValidation,UpdateValidation} from "../validations/photoValidation.js";
import PhotoService from '../services/photoService.js';
import type {Context} from "hono";

export const indexController = async (c: Context) => {
    try {
        const photos = await PhotoService.index();
        return c.json(photos, 200);
    } catch (error) {
        console.error('Error fetching photos:', error);
        return c.json({message: 'Failed to fetch photos'}, 500);
    }
};

export const createController = async (c: Context) => {
    try {
        const photo = await PhotoService.create(c);
        CreateValidation.parse(photo);
        return c.json(photo, 201);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error creating photo:', error);
            return c.json({ message: 'Failed to create photo', error: error.message }, 500);
        }
        console.error('Unexpected error:', error);
        return c.json({ message: 'Failed to create photo', error: 'An unknown error occurred' }, 500);
    }
};

export const readController = async (c: Context) => {
    try {
        const photo = await PhotoService.read(c);
        return c.json(photo, 200);
    } catch (error) {
        console.error('Error fetching photo:', error);
        return c.json({message: 'Failed to fetch photo'}, 500);
    }
};

export const updateController = async (c: Context) => {
    try {
        const photo = await PhotoService.update(c);
        if (photo) {
            UpdateValidation.parse(photo);
            return c.json(photo, 200);
        }
        return c.json({ message: 'Photo not found' }, 404);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error updating photo:', error);
            return c.json({ message: 'Failed to update photo', error: error.message }, 500);
        }

        console.error('Unexpected error:', error);
        return c.json({ message: 'Failed to update photo', error: 'An unknown error occurred' }, 500);
    }
};

export const deleteController = async (c: Context) => {
    try {
        const photo = await PhotoService.delete(c);
        return c.json(photo, 200);
    } catch (error) {
        console.error('Error deleting photo:', error);
        return c.json({message: 'Failed to delete photo'}, 500);
    }
};
