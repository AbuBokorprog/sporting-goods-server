import httpStatus from 'http-status'
import Products from '../products/products.model'
import { TCart } from './carts.interface'
import { Cart } from './carts.model'
import { AppError } from '../../error/AppError'

const createCart = async (payload: TCart) => {
  // vat 0.15 add in total price
  const vat = 0.15

  // check isExistProduct
  const isExistProduct = await Products.findById(payload.product_id)

  if (!isExistProduct) {
    throw new Error('The product not found')
  }

  // check is product already exist in cart?
  const isExistCart = await Cart.findOne({ product_id: payload.product_id })

  if (isExistCart) {
    // quantity increase if exist same product is cart
    isExistCart.quantity = isExistCart.quantity + 1

    // total price of product
    const totalPriceWithoutVat = isExistProduct?.price * isExistCart.quantity

    const totalPriceWithVat = (
      totalPriceWithoutVat +
      totalPriceWithoutVat * vat
    ).toFixed(2)
    // set total price with vat
    isExistCart.total_price = Number(totalPriceWithVat)

    // save existingCart
    await isExistCart.save()

    return isExistCart
  } else {
    // if cart of product is new
    const total_price = Number(
      isExistProduct.price + isExistProduct.price * vat,
    ).toFixed(2)

    payload.total_price = Number(total_price)

    payload.quantity = 1

    const result = await Cart.create(payload)
    return result
  }
}
const retrieveAllCart = async () => {
  const result = await Cart.find().populate('product_id')

  if (!result || result?.length <= 0) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Carts not found!')
  }

  return result
}

const retrieveSingleCart = async (id: string) => {
  const result = await Cart.findById(id)

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Cart not found!')
  }

  return result
}

const updateCart = async (id: string, payload: Partial<TCart>) => {
  const vat = 0.15
  const isExistCart = await Cart.findById(id)

  if (!isExistCart) {
    throw new Error('Cart not found')
  }

  // check isExistProduct
  const isExistProduct = await Products.findById(isExistCart?.product_id)

  if (!isExistProduct) {
    throw new Error('The product not found')
  }

  // if payload.quantity === -1 cart quantity and total_price will be decrease
  if (payload.quantity === -1) {
    isExistCart.quantity = isExistCart.quantity - 1

    // total price of product
    const totalPriceWithoutVat = isExistProduct?.price * isExistCart.quantity

    const totalPriceWithVat = (
      totalPriceWithoutVat +
      totalPriceWithoutVat * vat
    ).toFixed(2)
    // set total price with vat
    isExistCart.total_price = Number(totalPriceWithVat)

    await isExistCart.save()
    return isExistCart
  } else {
    // if payload.quantity !== -1 cart quantity and total_price will be decrease
    isExistCart.quantity = isExistCart.quantity + 1

    // total price of product
    const totalPriceWithoutVat = isExistProduct?.price * isExistCart.quantity

    const totalPriceWithVat = (
      totalPriceWithoutVat +
      totalPriceWithoutVat * vat
    ).toFixed(2)
    // set total price with vat
    isExistCart.total_price = Number(totalPriceWithVat)

    await isExistCart.save()
    return isExistCart
  }
}

const deleteCart = async (id: string) => {
  const result = await Cart.findByIdAndDelete(id)

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Delete cart failed!')
  }

  return result
}

export const cartServices = {
  createCart,
  retrieveAllCart,
  retrieveSingleCart,
  updateCart,
  deleteCart,
}
