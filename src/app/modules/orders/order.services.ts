import { startSession } from 'mongoose'
import { TOrder } from './order.interface'
import { Order } from './order.model'
import { Cart } from '../carts/carts.model'
import Stripe from 'stripe'
import config from '../../config'
import httpStatus from 'http-status'
import { AppError } from '../../error/AppError'
const stripe = new Stripe(config.secret_key as string)

const createOrder = async (payload: TOrder) => {
  const session = await startSession()
  if (payload?.payment_method === 'Cash on Delivery') {
    try {
      session.startTransaction()
      payload.isSuccess = true
      const result = await Order.create([payload], { session })

      await Cart.deleteMany({}, { session })

      await session.commitTransaction()
      session.endSession()
      return result
    } catch (error) {
      await session.abortTransaction()
      session.endSession()
      throw new Error('Error place order')
    }
  } else {
    try {
      session.startTransaction()
      payload.isSuccess = false
      const result = await Order.create([payload], { session })

      await Cart.deleteMany({}, { session })

      await session.commitTransaction()
      session.endSession()
      return result
    } catch (error) {
      await session.abortTransaction()
      session.endSession()
      throw new Error('Error place order')
    }
  }
}

const onlinePayment = async ({
  paymentMethodId,
  productId,
}: {
  paymentMethodId: string
  productId: string
}) => {
  const isExistOrder = await Order.findById(productId)

  try {
    if (!isExistOrder) {
      throw new AppError(httpStatus.NOT_FOUND, 'Order not exist')
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: 5000, // Replace with the actual amount in cents
      currency: 'usd',
      payment_method: paymentMethodId,
      confirm: true,
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'never', // Prevents redirect-based payment methods
      },
    })

    isExistOrder.isSuccess = true
    isExistOrder.save()

    return { clientSecret: paymentIntent.client_secret }
  } catch (error) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Online payment failed!')
  }
}

const retrieveAllOrder = async () => {
  const result = await Order.find()

  return result
}
const retrieveSingleOrder = async (id: string) => {
  const result = await Order.findById(id)
  return result
}
const updateSingleOrder = async (id: string, payload: Partial<TOrder>) => {
  const result = await Order.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })
  return result
}
const deleteSingleOrder = async (id: string) => {
  const result = await Order.findByIdAndDelete(id)
  return result
}

export const orderServices = {
  createOrder,
  retrieveAllOrder,
  retrieveSingleOrder,
  updateSingleOrder,
  deleteSingleOrder,
  onlinePayment,
}
