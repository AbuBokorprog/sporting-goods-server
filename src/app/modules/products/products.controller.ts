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
const retrieveAllProducts = () => {}
const retrieveSingleProduct = () => {}
const updateSingleProduct = () => {}
const deleteSingleProduct = () => {}

export const productsControllers = {
  createProductIntoDB,
  retrieveAllProducts,
  retrieveSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
}
