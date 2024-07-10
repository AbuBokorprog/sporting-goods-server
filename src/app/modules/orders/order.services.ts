import { startSession } from 'mongoose'
import { TUser } from '../user-details/user.details.interface'
import { UserDetails } from '../user-details/user.details.model'
import { TOrder } from './order.interface'
import { Order } from './order.model'

const createOrder = async (payload: TOrder) => {
  const user: TUser = {
    name: payload.customer_name,
    email: payload.customer_email,
    phone: payload.customer_phone,
    delivery_address: payload.customer_delivery_address,
  }
  const session = await startSession()

  try {
    session.startTransaction()

    const createUser = await UserDetails.create(user, { session })

    if (!createUser) {
      throw new Error('Error creating user')
    }

    const result = await Order.create(payload, { session })

    await session.commitTransaction()
    session.endSession()
    return result
  } catch (error) {
    await session.abortTransaction()
    session.endSession()
    throw new Error('Error creating user')
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
