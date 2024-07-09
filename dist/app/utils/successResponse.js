"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successResponse = void 0;
const successResponse = (res, data) => {
    return res.status(data.statusCode).json({
        success: data?.success,
        message: data?.message,
        data: data?.data,
    });
};
exports.successResponse = successResponse;
