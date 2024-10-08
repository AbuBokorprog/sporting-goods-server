import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import { successResponse } from '../../utils/successResponse'
import { userDetailsServices } from './user.details.services'

const retrieveAllUserDetails = catchAsync(async (req, res) => {
  const data = await userDetailsServices.retrieveAllUserDetails()

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Retrieved successfully',
    data,
  })
})

const DeleteUserDetails = catchAsync(async (req, res) => {
  const data = await userDetailsServices.DeleteUserDetails(req.params.id)
  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Deleted successfully',
    data,
  })
})

export const userDetailsController = {
  retrieveAllUserDetails,
  DeleteUserDetails,
}
