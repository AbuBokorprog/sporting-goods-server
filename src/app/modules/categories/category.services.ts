import httpStatus from 'http-status'
import { AppError } from '../../error/AppError'
import { TCategories } from './category.interface'
import { Category } from './category.model'

const createCategory = async (payload: TCategories) => {
  payload.slug = payload.category_name.toLowerCase()
  const result = await Category.create(payload)

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Create category failed!')
  }

  return result
}
const retrieveAllCategory = async () => {
  const result = await Category.find().sort({ createdAt: -1 })

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Category not found!')
  }

  return result
}
const retrieveSingleCategory = async (id: string) => {
  const result = await Category.findById(id)

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Category not found!')
  }

  return result
}
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
