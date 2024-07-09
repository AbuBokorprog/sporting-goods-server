import { model, Schema } from 'mongoose'
import { TCart } from './carts.interface'

const cartsSchema = new Schema<TCart>({
  product_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'product',
    unique: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  total_price: {
    type: Number,
    required: true,
  },
})

export const Cart = model('cart', cartsSchema)
