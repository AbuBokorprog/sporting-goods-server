"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDetailsController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = require("../../utils/catchAsync");
const successResponse_1 = require("../../utils/successResponse");
const user_details_services_1 = require("./user.details.services");
const retrieveAllUserDetails = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const data = await user_details_services_1.userDetailsServices.retrieveAllUserDetails();
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Retrieved successfully',
        data,
    });
});
const DeleteUserDetails = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const data = await user_details_services_1.userDetailsServices.DeleteUserDetails(req.params.id);
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Deleted successfully',
        data,
    });
});
exports.userDetailsController = {
    retrieveAllUserDetails,
    DeleteUserDetails,
};
