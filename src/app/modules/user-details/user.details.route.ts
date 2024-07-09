import express from 'express'
import { validationRequest } from '../../utils/validationRequest'
import { userDetailsController } from './user.details.controller'
import { createUserDetails } from './user.details.validation'
const route = express.Router()

route.post(
  '/',
  validationRequest(createUserDetails),
  userDetailsController.createUserDetails,
)
route.get(
  '/',

  userDetailsController.retrieveAllUserDetails,
)
route.delete(
  '/:id',

  userDetailsController.DeleteUserDetails,
)

export const userDetailsRoute = route
