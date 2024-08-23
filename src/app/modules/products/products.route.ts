import express from 'express'
import { productsControllers } from './products.controller'
import { validationRequest } from '../../utils/validationRequest'
import { createdProductValidationSchema } from './products.validation'
const route = express.Router()

route.post(
  '/',
  validationRequest(createdProductValidationSchema),
  productsControllers.createProductIntoDB,
)
route.get('/', productsControllers.retrieveAllProducts)
route.get('/:id', productsControllers.retrieveSingleProduct)
route.get('/category/:category', productsControllers.retrieveProductsByCategory)
route.put('/:id', productsControllers.updateSingleProduct)
route.delete('/:id', productsControllers.deleteSingleProduct)

export const productsRoutes = route
