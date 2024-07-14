import { z } from 'zod'

export const createCategoryValidationSchema = z.object({
  category_name: z.string({ message: 'Category name is required' }),
})

export const updateCategoryValidationSchema = z.object({
  category_name: z.string().optional(),
})
