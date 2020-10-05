import * as pages from './pages'
import getRoutes from './routes'
import './icons'

export { default as Layout } from './Layout'
export const routes = getRoutes(pages)
