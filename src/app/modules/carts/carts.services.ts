import httpStatus from 'http-status'
import Products from '../products/products.model'
import { TCart } from './carts.interface'
import { Cart } from './carts.model'
import { AppError } from '../../error/AppError'

// create cart service
const createCart = async (payload: TCart) => {
  // vat 0.15 add in total price
  const vat = 0.15

  const isExistProduct = await Products.findById(payload.product_id)
  // check isExistProduct
  if (!isExistProduct) {
    throw new Error('The product not found')
  }

  // check is product already exist in cart?
  const isExistCart = await Cart.findOne({ product_id: payload.product_id })

  if (isExistCart) {
    // quantity increase if exist same product is cart
    isExistCart.quantity = isExistCart.quantity + 1

    // total price of product without vat
    const totalPriceWithoutVat = isExistProduct?.price * isExistCart.quantity

    // total price of product with vat
    const totalPriceWithVat = (
      totalPriceWithoutVat +
      totalPriceWithoutVat * vat
    ).toFixed(2)
    // set total price with vat
    isExistCart.total_price = Number(totalPriceWithVat)

    // save existingCart
    await isExistCart.save()

    // product stock quantity decrease after added cart.
    isExistProduct.stock_quantity = isExistProduct.stock_quantity - 1
    await isExistProduct.save()

    return isExistCart
  } else {
    // if cart of product is new
    const totalPriceWithVat = Number(
      isExistProduct.price + isExistProduct.price * vat,
    ).toFixed(2)

    payload.total_price = Number(totalPriceWithVat)

    payload.quantity = 1

    // save cart
    const result = await Cart.create(payload)

    // product stock quantity decrease after added cart.
    isExistProduct.stock_quantity = isExistProduct.stock_quantity - 1
    await isExistProduct.save()

    return result
  }
}
// retrieve all cart
const retrieveAllCart = async () => {
  const result = await Cart.find().populate('product_id')

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Carts not found!')
  }

  return result
}
// retrieve single cart
const retrieveSingleCart = async (id: string) => {
  const result = await Cart.findById(id)

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Cart not found!')
  }

  return result
}
// retrieve update cart
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

    //save & decrease cart
    await isExistCart.save()

    // after cart quantity decrease , The product stock quantity increase and save
    isExistProduct.stock_quantity = isExistProduct.stock_quantity + 1
    await isExistProduct.save()

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

    //save & increase cart
    await isExistCart.save()

    // after cart quantity increase , The product stock quantity increase and save
    isExistProduct.stock_quantity = isExistProduct.stock_quantity - 1
    await isExistProduct.save()
    return isExistCart
  }
}

// delete cart
const deleteCart = async (id: string) => {
  const isExistCart = await Cart.findById(id)
  const cartOfProduct = await Products.findById(isExistCart?.product_id)

  const result = await Cart.findByIdAndDelete(id)

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Delete cart failed!')
  } else {
    if (isExistCart && cartOfProduct) {
      cartOfProduct.stock_quantity =
        cartOfProduct?.stock_quantity + isExistCart?.quantity

      await cartOfProduct.save()
      return result
    }
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
