import { z } from 'zod'
// order validation schema
const ProductSchema = z.object({
  product_name: z.string(),
  image: z.array(z.string()).min(1),
  category: z.string().optional(),
  description: z.string(),
  brand: z.string(),
  price: z.number().positive(),
  product_description: z.string(),
  rating: z.number().min(0).max(5),
  stock_quantity: z.number().int().nonnegative(),
})

export const createOrderSchema = z.object({
  customer_name: z.string({ message: 'Customer name is required' }),
  customer_email: z.string({ message: 'customer email is required' }),
  customer_phone: z.string({ message: 'Customer phone is required' }),
  customer_delivery_address: z.string({
    message: 'Customer address is required',
  }),
  products: z.array(ProductSchema),
  total_price: z.number(),
  isSuccess: z.boolean().optional(),
  payment_method: z.string(),
})
