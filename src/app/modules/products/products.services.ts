import httpStatus from 'http-status'
import { AppError } from '../../error/AppError'
import Products from './products.model'
import { Document, FilterQuery } from 'mongoose'
import { ProductFilter } from './products.utils'
import TProducts from './products.interface'

const createProductIntoDB = async (payload: TProducts) => {
  const result = await Products.create(payload)

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Created product failed!')
  }

  return result
}
const retrieveAllProducts = async (
  filter: FilterQuery<Document<ProductFilter>>,
) => {
  // pagination

  const page = Number(filter.page)
  const limit = 10
  const skip = (Number(page) - 1) * limit
  const result = await Products.find()
    .populate('category')
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 })

  const totalProducts = await Products.countDocuments() // Total number of products
  const totalPages = Math.ceil(totalProducts / limit) // Total number of pages

  if (!result || result?.length <= 0) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Product not found!')
  }

  // Apply additional filtering on the server side

  const result1 = result.filter((product: TProducts) => {
    let matches = true

    if (
      filter.category &&
      product.category._id.toString() !== filter.category
    ) {
      matches = false
    }
    if (filter.minPrice !== undefined && product.price < filter.minPrice) {
      matches = false
    }
    if (filter.maxPrice !== undefined && product.price > filter.maxPrice) {
      matches = false
    }
    if (filter.rating !== undefined && product.rating < filter.rating) {
      matches = false
    }
    if (filter.brand && product.brand !== filter.brand) {
      matches = false
    }

    return matches
  })

  // Sort the filtered products
  const sortedProducts = result1.sort((a: TProducts, b: TProducts) => {
    if (filter.sortOrder === 'price-asc') {
      return a.price - b.price // Low to high
    } else if (filter.sortOrder === 'price-desc') {
      return b.price - a.price // High to low
    } else {
      return 0 // No sorting
    }
  })

  return {
    sortedProducts,
    totalPages,
    page,
  }
}
const retrieveSingleProduct = async (id: string) => {
  const result = await Products.findById(id)

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Product not found!')
  }

  return result
}

const retrieveProductsByCategory = async (category: string) => {
  const result = await Products.find({ category })
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
  retrieveProductsByCategory,
  updateSingleProduct,
  deleteSingleProduct,
}
