// Define the interface for your filter object
export interface ProductFilter {
  category?: string
  minPrice?: number
  maxPrice?: number
  rating?: number
  brand?: string
  sortOrder?: string
}
