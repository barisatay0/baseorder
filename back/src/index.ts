import {Hono} from 'hono';
import { cors } from 'hono/cors'
import './controllers/itemController';
import {serve} from '@hono/node-server';
import { itemRoute, categoryRoute, companyRoute, photoRoute } from './route/index.js';

const app = new Hono();

app.use('*', cors({origin: 'http://localhost:5173',}));

app.route('/items', itemRoute);
app.route('/categories', categoryRoute);
app.route('/company', companyRoute);
app.route('/photo', photoRoute);

app.get('/', (c) => {return c.text('Hello Hono!');});
app.notFound((c) => {return c.text('Page is not defined', 404);});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({fetch: app.fetch, port});

export default app;
