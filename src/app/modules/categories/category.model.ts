import { model, Schema } from 'mongoose'
import { TCategories } from './category.interface'

const CategorySchema = new Schema<TCategories>(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    category_name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
)

export const Category = model('category', CategorySchema)
