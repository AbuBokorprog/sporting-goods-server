import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import { successResponse } from '../../utils/successResponse'
import { productsServices } from './products.services'

const createProductIntoDB = catchAsync(async (req, res) => {
  const data = await productsServices.createProductIntoDB(req.body)

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Created successfully',
    data,
  })
})
const retrieveAllProducts = catchAsync(async (req, res) => {
  const data = await productsServices.retrieveAllProducts()

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Retrieve all products',
    data,
  })
})
const retrieveSingleProduct = catchAsync(async (req, res) => {
  const data = await productsServices.retrieveSingleProduct(req.params.id)

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Retrieve single product',
    data,
  })
})
const updateSingleProduct = catchAsync(async (req, res) => {
  const data = await productsServices.updateSingleProduct(
    req.params.id,
    req.body,
  )

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Updated successfully',
    data,
  })
})
const deleteSingleProduct = catchAsync(async (req, res) => {
  const data = await productsServices.deleteSingleProduct(req.params.id)
  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Deleted successfully',
    data,
  })
})

export const productsControllers = {
  createProductIntoDB,
  retrieveAllProducts,
  retrieveSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
}
