import { startSession } from 'mongoose'
import { TOrder } from './order.interface'
import { Order } from './order.model'
import { Cart } from '../carts/carts.model'

const createOrder = async (payload: TOrder) => {
  const session = await startSession()

  try {
    session.startTransaction()

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
}
