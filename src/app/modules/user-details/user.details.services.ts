import { TUSer } from './user.details.interface'
import { UserDetails } from './user.details.model'

const createUserDetails = async (payload: TUSer) => {
  const result = await UserDetails.create(payload)

  return result
}

const retrieveAllUserDetails = async () => {
  const result = await UserDetails.find()

  return result
}

const DeleteUserDetails = async (id: string) => {
  const result = await UserDetails.findByIdAndDelete(id)

  return result
}
export const userDetailsServices = {
  createUserDetails,
  retrieveAllUserDetails,
  DeleteUserDetails,
}
