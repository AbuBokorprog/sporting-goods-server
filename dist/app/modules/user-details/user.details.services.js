"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDetailsServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = require("../../error/AppError");
const user_details_model_1 = require("./user.details.model");
const retrieveAllUserDetails = async () => {
    const result = await user_details_model_1.UserDetails.find();
    if (!result || result?.length <= 0) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'User details not found!');
    }
    return result;
};
const DeleteUserDetails = async (id) => {
    const result = await user_details_model_1.UserDetails.findByIdAndDelete(id);
    if (!result) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'delete user details  failed!');
    }
    return result;
};
exports.userDetailsServices = {
    retrieveAllUserDetails,
    DeleteUserDetails,
};
