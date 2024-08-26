import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import { successResponse } from '../../utils/successResponse'
import { categoryServices } from './category.services'

// create category controller
const createCategory = catchAsync(async (req, res) => {
  const data = await categoryServices.createCategory(req.body)

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Created category successfully',
    data,
  })
})
// retrieve all category
const retrieveAllCategory = catchAsync(async (req, res) => {
  const data = await categoryServices.retrieveAllCategory()

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Retrieved all categories successfully',
    data,
  })
})

// retrieve single category
const retrieveSingleCategory = catchAsync(async (req, res) => {
  const data = await categoryServices.retrieveSingleCategory(req.params.id)

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Retrieved single category successfully',
    data,
  })
})

// update category
const updateCategory = catchAsync(async (req, res) => {
  const data = await categoryServices.updateCategory(req.params.id, req.body)

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Updated category successfully',
    data,
  })
})

// delete category
const deleteCategory = catchAsync(async (req, res) => {
  const data = await categoryServices.deleteCategory(req.params.id)

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Deleted category successfully',
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
