import {serve} from '@hono/node-server';
import {Hono} from 'hono';
import './controllers/itemController';
import {itemRoute} from './route/itemRoute.js';
import {categoryRoute} from './route/categoryRoute.js';
import {companyRoute} from "./route/companyRoute.js";
import {photoRoute} from "./route/photoRoute.js";

const app = new Hono();

app.route('/items', itemRoute);
app.route('/categories', categoryRoute);
app.route('/company', companyRoute);
app.route('/photo', photoRoute);

app.get('/', (c) => {
    return c.text('Hello Hono!');
});
app.notFound((c) => {
    return c.text('Page is not defined', 404);
});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
    fetch: app.fetch,
    port
});

export default app;
