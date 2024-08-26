// product filter query types interface
export interface ProductFilter {
  category?: string
  minPrice?: number
  maxPrice?: number
  rating?: number
  brand?: string
  sortOrder?: string
  page?: string
}
