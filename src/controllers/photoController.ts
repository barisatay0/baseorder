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
        const photos = await PhotoService.create(c);
        return c.json(photos, 200);
    } catch (error) {
        console.error('Error creating photo:', error);
        return c.json({message: 'Failed to create photo'}, 500);
    }
};

export const readController = async (c: Context) => {
    try {
        const photos = await PhotoService.read(c);
        return c.json(photos, 200);
    } catch (error) {
        console.error('Error fetching photo:', error);
        return c.json({message: 'Failed to fetch photo'}, 500);
    }
};

export const updateController = async (c: Context) => {
    try {
        const photos = await PhotoService.update(c);
        return c.json(photos, 200);
    } catch (error) {
        console.error('Error updating photo:', error);
        return c.json({message: 'Failed to update photo'}, 500);
    }
};

export const deleteController = async (c: Context) => {
    try {
        const photos = await PhotoService.delete(c);
        return c.json(photos, 200);
    } catch (error) {
        console.error('Error deleting photo:', error);
        return c.json({message: 'Failed to delete photo'}, 500);
    }
};
