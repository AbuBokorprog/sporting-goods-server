import httpStatus from 'http-status'
import { AppError } from '../../error/AppError'
import { UserDetails } from './user.details.model'

const retrieveAllUserDetails = async () => {
  const result = await UserDetails.find()

  if (!result || result?.length <= 0) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User details not found!')
  }

  return result
}

const DeleteUserDetails = async (id: string) => {
  const result = await UserDetails.findByIdAndDelete(id)

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'delete user details  failed!')
  }

  return result
}
export const userDetailsServices = {
  retrieveAllUserDetails,
  DeleteUserDetails,
}
