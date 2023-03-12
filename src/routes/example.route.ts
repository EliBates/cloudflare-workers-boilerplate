import { Hono } from 'hono'

export const route = new Hono<{ Bindings: Bindings }>()

route.get('/', (c) => {
  return c.json({ message: 'Hello world' })
})
