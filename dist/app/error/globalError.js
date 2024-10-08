"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const zod_1 = require("zod");
const globalErrorHandler = (err, req, res, 
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
next) => {
    let statusCode = 500;
    let message = 'Something went wrong';
    let errorSources = {
        path: '',
        message: 'Something went wrong!',
    };
    if (err instanceof zod_1.ZodError) {
        console.log(err.ZodError);
    }
    return res.status(statusCode).json({
        statusCode,
        success: false,
        message,
    });
};
exports.globalErrorHandler = globalErrorHandler;
