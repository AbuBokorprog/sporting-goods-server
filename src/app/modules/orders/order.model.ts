import { model, Schema } from 'mongoose'

const OrderSchema = new Schema({
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
    type: Array,
    required: true,
  },
  total_price: {
    type: Number,
    required: true,
  },
})

export const Order = model('order', OrderSchema)
