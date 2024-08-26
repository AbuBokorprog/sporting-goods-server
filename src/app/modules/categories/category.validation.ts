import { z } from 'zod'

// categories validation schema
export const createCategoryValidationSchema = z.object({
  category_name: z.string({ message: 'Category name is required' }),
  image: z.string({ message: 'Image is required' }),
})

export const updateCategoryValidationSchema = z.object({
  category_name: z.string().optional(),
  image: z.string().optional(),
})
