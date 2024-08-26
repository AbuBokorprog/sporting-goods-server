import express from 'express'
import { productsControllers } from './products.controller'
import { validationRequest } from '../../utils/validationRequest'
import { createdProductValidationSchema } from './products.validation'
const route = express.Router()
// products route
route.post(
  '/',
  validationRequest(createdProductValidationSchema),
  productsControllers.createProductIntoDB,
)
route.get('/', productsControllers.retrieveAllProducts)
route.get('/:id', productsControllers.retrieveSingleProduct)
route.get('/category/:category', productsControllers.retrieveProductsByCategory)
route.get('/search/searchTerm', productsControllers.retrieveProductsBySearch)
route.put('/:id', productsControllers.updateSingleProduct)
route.delete('/:id', productsControllers.deleteSingleProduct)

export const productsRoutes = route
