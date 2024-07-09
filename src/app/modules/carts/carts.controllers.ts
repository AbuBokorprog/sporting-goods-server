import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import { successResponse } from '../../utils/successResponse'
import { cartServices } from './carts.services'

const createCart = catchAsync(async (req, res) => {
  const data = await cartServices.createCart(req.body)

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart created successfully',
    data,
  })
})
const retrieveAllCart = catchAsync(async (req, res) => {
  const data = await cartServices.retrieveAllCart()

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart retrieved successfully',
    data,
  })
})
const retrieveSingleCart = catchAsync(async (req, res) => {
  const data = await cartServices.retrieveSingleCart(req.params.id)
  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart retrieved successfully',
    data,
  })
})
const updateCart = catchAsync(async (req, res) => {
  const data = await cartServices.updateCart(req.params.id, req.body)

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart updated successfully',
    data,
  })
})
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
