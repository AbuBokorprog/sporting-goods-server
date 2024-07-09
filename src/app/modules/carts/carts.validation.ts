import { z } from 'zod'

export const createCartValidationSchema = z.object({
  product_id: z.string({ message: 'Product id is required' }),
})

export const updateCartValidationSchema = z.object({
  product_id: z.string().optional(),
})
