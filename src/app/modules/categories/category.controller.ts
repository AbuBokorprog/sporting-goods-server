import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import { successResponse } from '../../utils/successResponse'
import { categoryServices } from './category.services'

const createCategory = catchAsync(async (req, res) => {
  const data = await categoryServices.createCategory(req.body)

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Created category',
    data,
  })
})
const retrieveAllCategory = catchAsync(async (req, res) => {
  const data = await categoryServices.retrieveAllCategory()

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Retrieved all category',
    data,
  })
})
const retrieveSingleCategory = catchAsync(async (req, res) => {
  const data = await categoryServices.retrieveSingleCategory(req.params.id)

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Retrieved single category',
    data,
  })
})
const updateCategory = catchAsync(async (req, res) => {
  const data = await categoryServices.updateCategory(req.params.id, req.body)

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Updated category',
    data,
  })
})
const deleteCategory = catchAsync(async (req, res) => {
  const data = await categoryServices.deleteCategory(req.params.id)

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Deleted category',
    data,
  })
})

export const categoryControllers = {
  createCategory,
  retrieveAllCategory,
  retrieveSingleCategory,
  updateCategory,
  deleteCategory,
}
