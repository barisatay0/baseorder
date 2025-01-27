import {Hono} from 'hono';
import {
    indexController,
    createController,
    readController,
    updateController,
    deleteController
} from '../controllers/photoController.js';

const photoRoute = new Hono();

photoRoute.get('/', indexController);
photoRoute.post('/', createController);
photoRoute.get("/:id", readController);
photoRoute.put("/:id", updateController);
photoRoute.delete("/:id", deleteController);

export {photoRoute};
