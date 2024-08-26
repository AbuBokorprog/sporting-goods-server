import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import { successResponse } from '../../utils/successResponse'
import { cartServices } from './carts.services'

// create cart controller
const createCart = catchAsync(async (req, res) => {
  const data = await cartServices.createCart(req.body)

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart created successfully',
    data,
  })
})

// retrieve all carts
const retrieveAllCart = catchAsync(async (req, res) => {
  const data = await cartServices.retrieveAllCart()

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart retrieved successfully',
    data,
  })
})

// retrieve specific single cart
const retrieveSingleCart = catchAsync(async (req, res) => {
  const data = await cartServices.retrieveSingleCart(req.params.id)
  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart retrieved successfully',
    data,
  })
})

// update cart controller
const updateCart = catchAsync(async (req, res) => {
  const data = await cartServices.updateCart(req.params.id, req.body)

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart updated successfully',
    data,
  })
})
// delete cart controller
const deleteCart = catchAsync(async (req, res) => {
  const data = await cartServices.deleteCart(req.params.id)
  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart deleted successfully',
    data,
  })
})

export const cartController = {
  createCart,
  retrieveAllCart,
  retrieveSingleCart,
  updateCart,
  deleteCart,
}
