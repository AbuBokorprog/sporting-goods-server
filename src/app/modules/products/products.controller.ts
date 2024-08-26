import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import { successResponse } from '../../utils/successResponse'
import { productsServices } from './products.services'
import { ProductFilter } from './products.utils'

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
  const { category, minPrice, maxPrice, rating, brand, sortOrder, page } =
    req.query

  // Build filter object based on query parameters
  const filter: ProductFilter = {}

  if (category) {
    filter.category = category as string
  }

  if (minPrice) {
    filter.minPrice = parseFloat(minPrice as string)
  }

  if (maxPrice) {
    filter.maxPrice = parseFloat(maxPrice as string)
  }

  if (rating) {
    filter.rating = parseFloat(rating as string)
  }

  if (brand) {
    filter.brand = brand as string
  }
  if (sortOrder) {
    filter.sortOrder = sortOrder as string
  }
  if (page) {
    filter.page = page as string
  }

  // Fetch data from the service layer with applied filters
  const result = await productsServices.retrieveAllProducts(filter)

  const data = {
    totalPages: result?.totalPages,
    page: result?.page,
    data: result?.sortedProducts,
  }

  // Send a successful response with the filtered data
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

const retrieveProductsBySearch = catchAsync(async (req, res) => {
  const name = req.query.search_term

  const data = await productsServices.retrieveProductsBySearch(name as string)

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'retrieve products successfully',
    data,
  })
})

const retrieveProductsByCategory = catchAsync(async (req, res) => {
  const data = await productsServices.retrieveProductsByCategory(
    req.params.category,
  )

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Retrieve products by category',
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
  retrieveProductsBySearch,
  retrieveProductsByCategory,
}
