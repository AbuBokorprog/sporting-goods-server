import httpStatus from 'http-status'
import { AppError } from '../../error/AppError'
import { TCategories } from './category.interface'
import { Category } from './category.model'

// create category service
const createCategory = async (payload: TCategories) => {
  // add slug
  payload.slug = payload.category_name.toLowerCase()
  // create category
  const result = await Category.create(payload)

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Create category failed!')
  }

  return result
}

// retrieve all categories
const retrieveAllCategory = async () => {
  const result = await Category.find().sort({ createdAt: -1 })

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Category not found!')
  }

  return result
}

// retrieve single category
const retrieveSingleCategory = async (id: string) => {
  const result = await Category.findById(id)

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Category not found!')
  }

  return result
}

// update category
const updateCategory = async (id: string, payload: Partial<TCategories>) => {
  const result = await Category.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'update category failed!')
  }

  return result
}
// delete category
const deleteCategory = async (id: string) => {
  const result = await Category.findByIdAndDelete(id)

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'delete category failed!')
  }

  return result
}

export const categoryServices = {
  createCategory,
  retrieveAllCategory,
  retrieveSingleCategory,
  updateCategory,
  deleteCategory,
}
