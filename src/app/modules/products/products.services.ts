import httpStatus from 'http-status'
import { AppError } from '../../error/AppError'
import TProducts from './products.interface'
import Products from './products.model'

const createProductIntoDB = async (payload: TProducts) => {
  const result = await Products.create(payload)

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Created product failed!')
  }

  return result
}
const retrieveAllProducts = async () => {
  const result = await Products.find().populate('category')

  if (!result || result?.length <= 0) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Product not found!')
  }

  return result
}
const retrieveSingleProduct = async (id: string) => {
  const result = await Products.findById(id)

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Product not found!')
  }

  return result
}
const updateSingleProduct = async (id: string, payload: Partial<TProducts>) => {
  const result = await Products.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Update product failed!')
  }

  return result
}
const deleteSingleProduct = async (id: string) => {
  const result = await Products.findByIdAndDelete(id)

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Delete product failed!')
  }

  return result
}

export const productsServices = {
  createProductIntoDB,
  retrieveAllProducts,
  retrieveSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
}
