import { route as exampleRoute } from './example.route'

const base_path = 'v1'

export const defaultRoutes = [
  {
    path: `/${base_path}/example`,
    route: exampleRoute
  }
]
