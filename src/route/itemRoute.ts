import { Hono } from 'hono';
import { items } from '../controllers/itemController.js';

const itemRoute = new Hono();

itemRoute.get('/', items);

export { itemRoute };
