import { model, Schema } from 'mongoose'
import { TOrder } from './order.interface'
import TProducts from '../products/products.interface'

const ProductsSchema = new Schema<TProducts>(
  {
    product_name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    product_description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    stock_quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

const OrderSchema = new Schema<TOrder>({
  customer_name: {
    type: String,
    required: true,
  },
  customer_email: {
    type: String,
    required: true,
  },
  customer_phone: {
    type: Number,
    required: true,
  },
  customer_delivery_address: {
    type: String,
    required: true,
  },
  products: {
    type: ProductsSchema,
    required: true,
  },
  total_price: {
    type: Number,
    required: true,
  },
})

export const Order = model('order', OrderSchema)
