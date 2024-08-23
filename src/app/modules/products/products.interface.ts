import { Types } from 'mongoose'

export default interface TProducts {
  product_name: string
  description: string
  category: Types.ObjectId
  brand: string
  stock_quantity: number
  rating: number
  product_description: string
  price: number
  image: Array<string>
}
