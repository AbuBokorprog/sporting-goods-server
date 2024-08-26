import TProducts from '../products/products.interface'
// order types
export interface TOrder {
  customer_name: string
  customer_email: string
  customer_phone: string
  customer_delivery_address: string
  products: TProducts[]
  total_price: number
  isSuccess: boolean
  payment_method: string
}
