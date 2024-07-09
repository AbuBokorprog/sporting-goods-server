import express from 'express'
import { productsRoutes } from '../modules/products/products.route'
const router = express.Router()

const moduleRoutes = [
  {
    path: '/products',
    route: productsRoutes,
  },
]

moduleRoutes.forEach((r) => router.use(r.path, r.route))

export default router
