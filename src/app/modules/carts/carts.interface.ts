import { Types } from 'mongoose'

export interface TCart {
  product_id: Types.ObjectId
  quantity: number
  total_price: number
}
