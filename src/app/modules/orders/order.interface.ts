export interface TOrder {
  customer_name: string
  customer_email: string
  customer_phone: string
  customer_delivery_address: string
  products: Array<object>
  total_price: number
}
