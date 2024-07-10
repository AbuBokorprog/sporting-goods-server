"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const zod_1 = require("zod");
const zodErrorhandler_1 = require("../error/zodErrorhandler");
const globalErrorHandler = (err, req, res, 
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
next) => {
    let statusCode = 500;
    let message = err || 'Something went wrong';
    let errorSources = [
        {
            path: '',
            message: 'Something went wrong!',
        },
    ];
    if (err instanceof zod_1.ZodError) {
        const simplifiedError = (0, zodErrorhandler_1.zodErrorHandler)(err);
        message = simplifiedError.message;
        statusCode = simplifiedError.statusCode;
        errorSources = simplifiedError.errorSources;
    }
    return res.status(statusCode).json({
        statusCode,
        success: false,
        message,
        errorSources,
        stack: err?.stack,
    });
};
exports.globalErrorHandler = globalErrorHandler;
