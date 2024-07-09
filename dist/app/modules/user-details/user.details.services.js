"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDetailsServices = void 0;
const user_details_model_1 = require("./user.details.model");
const createUserDetails = async (payload) => {
    const result = await user_details_model_1.UserDetails.create(payload);
    return result;
};
const retrieveAllUserDetails = async () => {
    const result = await user_details_model_1.UserDetails.find();
    return result;
};
const DeleteUserDetails = async (id) => {
    const result = await user_details_model_1.UserDetails.findByIdAndDelete(id);
    return result;
};
exports.userDetailsServices = {
    createUserDetails,
    retrieveAllUserDetails,
    DeleteUserDetails,
};
