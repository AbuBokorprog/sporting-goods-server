import { TCategories } from './category.interface'
import { Category } from './category.model'

const createCategory = async (payload: TCategories) => {
  const data = await Category.create(payload)

  return data
}
const retrieveAllCategory = async () => {
  const data = await Category.find()

  return data
}
const retrieveSingleCategory = async (id: string) => {
  const data = await Category.findById(id)

  return data
}
const updateCategory = async (id: string, payload: Partial<TCategories>) => {
  const data = await Category.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })

  return data
}
const deleteCategory = async (id: string) => {
  const data = await Category.findByIdAndDelete(id)

  return data
}

export const categoryServices = {
  createCategory,
  retrieveAllCategory,
  retrieveSingleCategory,
  updateCategory,
  deleteCategory,
}
