import { defaultRoutes } from './routes/index'
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono<{ Bindings: Bindings }>()

app.use('*', cors())

app.notFound((c) => {
  return c.json({ error: 'Not found' })
})

defaultRoutes.forEach((route) => {
  app.route(`${route.path}`, route.route)
})

export default app
