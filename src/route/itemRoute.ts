import { Hono } from 'hono';
import { indexController, createController, readController, updateController, deleteController } from '../controllers/itemController.js';

const itemRoute = new Hono();

itemRoute.get('/', indexController);
itemRoute.post('/', createController);
itemRoute.get("/:id", readController);
itemRoute.put("/:id", updateController);
itemRoute.delete("/:id", deleteController);

export { itemRoute };
