import mongoose, { model } from 'mongoose'
import TProducts from './products.interface'

const ProductsSchema = new mongoose.Schema<TProducts>({
  product_name: {
    types: String,
    required: true,
    unique: true,
  },
  image: {
    types: String,
    required: true,
  },
  category: {
    types: String,
    required: true,
    unique: true,
  },
  description: {
    types: String,
    required: true,
  },
  brand: {
    types: String,
    required: true,
    unique: true,
  },
  price: {
    types: Number,
    required: true,
  },
  product_description: {
    types: String,
    required: true,
  },
  rating: {
    types: Number,
    required: true,
  },
  stock_quantity: {
    types: Number,
    required: true,
  },
})

const Products = model<TProducts>('product', ProductsSchema)

export default Products
