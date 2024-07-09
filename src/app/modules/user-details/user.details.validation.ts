import { z } from 'zod'

export const createUserDetails = z.object({
  name: z.string({ message: 'Name is required' }),
  email: z
    .string({ message: 'Email is required' })
    .email({ message: 'Must be authentic email' }),
  phone: z.number({ message: 'Phone is required' }),
  delivery_address: z.string({ message: 'Delivery address is required' }),
})
