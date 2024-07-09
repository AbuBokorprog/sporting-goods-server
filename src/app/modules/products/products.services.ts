import TProducts from './products.interface'
import Products from './products.model'

const createProductIntoDB = async (payload: TProducts) => {
  const result = await Products.create(payload)

  return result
}
const retrieveAllProducts = async () => {}
const retrieveSingleProduct = async () => {}
const updateSingleProduct = async () => {}
const deleteSingleProduct = async () => {}

export const productsServices = {
  createProductIntoDB,
  retrieveAllProducts,
  retrieveSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
}
