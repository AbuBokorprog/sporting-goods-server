import express from 'express'
import { validationRequest } from '../../utils/validationRequest'
import {
  createCartValidationSchema,
  updateCartValidationSchema,
} from './carts.validation'
import { cartController } from './carts.controllers'
const route = express.Router()

route.post(
  '/',
  validationRequest(createCartValidationSchema),
  cartController.createCart,
)
route.get('/', cartController.retrieveAllCart)
route.get('/:id', cartController.retrieveSingleCart)
route.put(
  '/:id',
  validationRequest(updateCartValidationSchema),
  cartController.updateCart,
)
route.delete('/:id', cartController.deleteCart)

export const cartRoute = route
