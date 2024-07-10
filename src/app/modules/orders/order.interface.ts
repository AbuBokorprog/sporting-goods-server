import TProducts from '../products/products.interface'

export interface TOrder {
  customer_name: string
  customer_email: string
  customer_phone: number
  customer_delivery_address: string
  products: TProducts
  total_price: number
}
