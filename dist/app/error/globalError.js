"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const globalErrorHandler = (err, req, res, 
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
next) => {
    const statusCode = 500;
    const message = err || 'Something went wrong';
    return res.status(statusCode).json({
        statusCode,
        success: false,
        message,
    });
};
exports.globalErrorHandler = globalErrorHandler;
