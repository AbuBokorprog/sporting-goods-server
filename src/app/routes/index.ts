import express from 'express'
import { productsRoutes } from '../modules/products/products.route'
import { categoryRoutes } from '../modules/categories/category.route'
const router = express.Router()

const moduleRoutes = [
  {
    path: '/products',
    route: productsRoutes,
  },
  {
    path: '/categories',
    route: categoryRoutes,
  },
]

moduleRoutes.forEach((r) => router.use(r.path, r.route))

export default router
