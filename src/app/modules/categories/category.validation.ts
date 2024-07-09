import { z } from 'zod'

export const createCategoryValidationSchema = z.object({
  slug: z.string({ message: 'Slug is required' }),
  category_name: z.string({ message: 'Category name is required' }),
})

export const updateCategoryValidationSchema = z.object({
  slug: z.string().optional(),
  category_name: z.string().optional(),
})
