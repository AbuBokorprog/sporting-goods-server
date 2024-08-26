import express from 'express'
import { validationRequest } from '../../utils/validationRequest'
import { createOrderSchema } from './order.validation'
import { orderController } from './order.controller'
const route = express.Router()

// order routes
route.post(
  '/',
  validationRequest(createOrderSchema),
  orderController.createOrder,
)
route.post('/online-payment', orderController.onlinePayment)
route.get('/', orderController.retrieveAllOrder)
route.get('/:id', orderController.retrieveSingleOrder)
route.put('/:id', orderController.updateSingleOrder)
route.delete('/:id', orderController.deleteSingleOrder)

export const OrderRoutes = route
