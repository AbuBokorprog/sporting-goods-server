import { model, Schema } from 'mongoose'
import { TUSer } from './user.details.interface'

const userDetailsSchema = new Schema<TUSer>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
  delivery_address: {
    type: String,
    required: true,
  },
})

export const UserDetails = model('user-detail', userDetailsSchema)
