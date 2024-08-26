import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import { successResponse } from '../../utils/successResponse'
import { orderServices } from './order.services'

// create order controller
const createOrder = catchAsync(async (req, res) => {
  const data = await orderServices.createOrder(req.body)

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'create order successfully',
    data,
  })
})

// online payment order controller
const onlinePayment = catchAsync(async (req, res) => {
  const data = await orderServices.onlinePayment(req.body)

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Payment successful!',
    data,
  })
})

// retrieve all order controller
const retrieveAllOrder = catchAsync(async (req, res) => {
  const data = await orderServices.retrieveAllOrder()

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'retrieve all order successfully',
    data,
  })
})

// retrieve single order controller
const retrieveSingleOrder = catchAsync(async (req, res) => {
  const data = await orderServices.retrieveSingleOrder(req.params.id)

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'retrieve single order successfully',
    data,
  })
})
// update order
const updateSingleOrder = catchAsync(async (req, res) => {
  const data = await orderServices.updateSingleOrder(req.params.id, req.body)

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'update single order successfully',
    data,
  })
})
// delete order
const deleteSingleOrder = catchAsync(async (req, res) => {
  const data = await orderServices.deleteSingleOrder(req.params.id)

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'delete single order successfully',
    data,
  })
})

export const orderController = {
  createOrder,
  retrieveAllOrder,
  retrieveSingleOrder,
  updateSingleOrder,
  deleteSingleOrder,
  onlinePayment,
}
