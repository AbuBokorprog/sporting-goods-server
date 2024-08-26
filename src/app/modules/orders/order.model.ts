import { model, Schema } from 'mongoose'
import { TOrder } from './order.interface'
// order model
// Define the Products schema
const ProductsSchema = new Schema(
  {
    product_name: {
      type: String,
      required: true,
    },
    image: {
      type: [String],
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'category',
    },
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
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

// Define the Order schema
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
    type: String,
    required: true,
  },
  customer_delivery_address: {
    type: String,
    required: true,
  },
  products: {
    type: [ProductsSchema],
    required: true,
  },
  total_price: {
    type: Number,
    required: true,
  },
  isSuccess: {
    type: Boolean,
  },
  payment_method: {
    type: String,
    required: true,
  },
})

export const Order = model('order', OrderSchema)
