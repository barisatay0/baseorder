import {Hono} from 'hono';
import {
    indexController,
    createController,
    readController,
    updateController,
    deleteController
} from '../controllers/categoryController.js';

const categoryRoute = new Hono();

categoryRoute.get('/', indexController);
categoryRoute.post('/', createController);
categoryRoute.get("/:id", readController);
categoryRoute.put("/:id", updateController);
categoryRoute.delete("/:id", deleteController);

export {categoryRoute};
