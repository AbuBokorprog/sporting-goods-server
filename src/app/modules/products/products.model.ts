import mongoose, { model, Schema } from 'mongoose'
import TProducts from './products.interface'

const ProductsSchema = new mongoose.Schema<TProducts>(
  {
    product_name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: [String],
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: 'category',
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

const Products = model('product', ProductsSchema)

export default Products
