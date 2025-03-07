import { Hono } from 'hono';
import { handle } from 'hono/vercel';

export const runtime = 'edge';
const app = new Hono().basePath('/api');

app.get('/hello', (c) => c.json({ message: 'Hello, from HONO!' }));

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
export const PATCH = handle(app);
export const OPTIONS = handle(app);
export const HEAD = handle(app);
export const TRACE = handle(app);
export const CONNECT = handle(app);
