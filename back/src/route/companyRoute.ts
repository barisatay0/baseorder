import {Hono} from 'hono';
import {
    indexController,
    createController,
    readController,
    updateController,
    deleteController
} from '../controllers/companyController.js';

const companyRoute = new Hono();

companyRoute.get('/', indexController);
companyRoute.post('/', createController);
companyRoute.get("/:id", readController);
companyRoute.put("/:id", updateController);
companyRoute.delete("/:id", deleteController);

export {companyRoute};
