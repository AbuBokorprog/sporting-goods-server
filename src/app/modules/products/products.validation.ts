import { z } from 'zod'

const createdProductValidationSchema = z.object({
  product_name: z.string(),
  image: z.array(z.string()),
  category: z.string(),
  description: z.string(),
  brand: z.string(),
  price: z.number().positive(),
  product_description: z.string(),
  rating: z.number().min(0).max(5),
  stock_quantity: z.number().int().nonnegative(),
})

const updateProductValidationSchema = z.object({
  product_name: z.string().optional(),
  image: z.array(z.string()).optional(),
  category: z.string().optional(),
  description: z.string().optional(),
  brand: z.string().optional(),
  price: z.number().positive().optional(),
  product_description: z.string().optional(),
  rating: z.number().min(0).max(5).optional(),
  stock_quantity: z.number().int().nonnegative().optional(),
})

export { createdProductValidationSchema, updateProductValidationSchema }
