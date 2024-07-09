import { TCategories } from './category.interface'
import { Category } from './category.model'

const createCategory = async (payload: TCategories) => {
  const result = await Category.create(payload)

  return result
}
const retrieveAllCategory = async () => {
  const result = await Category.find()

  return result
}
const retrieveSingleCategory = async (id: string) => {
  const result = await Category.findById(id)

  return result
}
const updateCategory = async (id: string, payload: Partial<TCategories>) => {
  const result = await Category.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })

  return result
}
const deleteCategory = async (id: string) => {
  const result = await Category.findByIdAndDelete(id)

  return result
}

export const categoryServices = {
  createCategory,
  retrieveAllCategory,
  retrieveSingleCategory,
  updateCategory,
  deleteCategory,
}
