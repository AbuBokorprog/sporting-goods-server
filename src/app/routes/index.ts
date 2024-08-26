import express from 'express'
import { productsRoutes } from '../modules/products/products.route'
import { categoryRoutes } from '../modules/categories/category.route'
import { userDetailsRoute } from '../modules/user-details/user.details.route'
import { cartRoute } from '../modules/carts/carts.route'
import { OrderRoutes } from '../modules/orders/order.route'
const router = express.Router()

// Routes
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
  {
    path: '/orders',
    route: OrderRoutes,
  },
]

moduleRoutes.forEach((r) => router.use(r.path, r.route))

export default router
