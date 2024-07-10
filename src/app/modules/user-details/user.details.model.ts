import { model, Schema } from 'mongoose'
import { TUser } from './user.details.interface'

const userDetailsSchema = new Schema<TUser>(
  {
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
  },
  {
    timestamps: true,
  },
)

export const UserDetails = model('user-detail', userDetailsSchema)
