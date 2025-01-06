import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import './controllers/itemController';
import { itemRoute } from './route/itemRoute.js';

const app = new Hono();

app.route('/items', itemRoute);

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
