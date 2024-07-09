import express from 'express'
import { productsRoutes } from '../modules/products/products.route'
import { categoryRoutes } from '../modules/categories/category.route'
import { userDetailsRoute } from '../modules/user-details/user.details.route'
import { cartRoute } from '../modules/carts/carts.route'
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
  {
    path: '/user-details',
    route: userDetailsRoute,
  },
  {
    path: '/cart',
    route: cartRoute,
  },
]

moduleRoutes.forEach((r) => router.use(r.path, r.route))

export default router
