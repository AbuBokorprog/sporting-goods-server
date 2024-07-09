import TProducts from './products.interface'
import Products from './products.model'

const createProductIntoDB = async (payload: TProducts) => {
  const result = await Products.create(payload)

  return result
}
const retrieveAllProducts = async () => {
  const result = await Products.find()

  return result
}
const retrieveSingleProduct = async (id: string) => {
  const result = await Products.findById(id)

  return result
}
const updateSingleProduct = async (id: string, payload: Partial<TProducts>) => {
  const result = await Products.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })

  return result
}
const deleteSingleProduct = async (id: string) => {
  const result = await Products.findByIdAndDelete(id)

  return result
}

export const productsServices = {
  createProductIntoDB,
  retrieveAllProducts,
  retrieveSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
}
