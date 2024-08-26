import express from 'express'
import { validationRequest } from '../../utils/validationRequest'
import { createCategoryValidationSchema } from './category.validation'
import { categoryControllers } from './category.controller'
const route = express.Router()

// categories route
route.post(
  '/',
  validationRequest(createCategoryValidationSchema),
  categoryControllers.createCategory,
)
route.get('/', categoryControllers.retrieveAllCategory)
route.get('/:id', categoryControllers.retrieveSingleCategory)
route.put('/:id', categoryControllers.updateCategory)
route.delete('/:id', categoryControllers.deleteCategory)
export const categoryRoutes = route
