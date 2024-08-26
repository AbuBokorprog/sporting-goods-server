import { Types } from 'mongoose'

// cart interface
export interface TCart {
  product_id: Types.ObjectId
  quantity: number
  total_price: number
}
