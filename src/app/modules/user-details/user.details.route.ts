import express from 'express'
import { userDetailsController } from './user.details.controller'
const route = express.Router()

route.get(
  '/',

  userDetailsController.retrieveAllUserDetails,
)
route.delete(
  '/:id',

  userDetailsController.DeleteUserDetails,
)

export const userDetailsRoute = route
