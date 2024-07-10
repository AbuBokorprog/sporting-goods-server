"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const zod_1 = require("zod");
const zodErrorhandler_1 = require("../error/zodErrorhandler");
const mongooseValidationErrorHandler_1 = require("../error/mongooseValidationErrorHandler");
const castErrorHandler_1 = require("../error/castErrorHandler");
const duplicateErrorHandler_1 = require("../error/duplicateErrorHandler");
const AppError_1 = require("../error/AppError");
const globalErrorHandler = (err, req, res, 
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
next) => {
    let statusCode = 500;
    let message = 'Something went wrong';
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
    else if (err.name === 'ValidationError') {
        const simplifiedError = (0, mongooseValidationErrorHandler_1.ValidationError)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSources = simplifiedError.errorSources;
    }
    else if (err.name === 'CastError') {
        const simplifiedError = (0, castErrorHandler_1.castErrorhandler)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSources = simplifiedError.errorSources;
    }
    else if (err.code === 11000) {
        const simplifiedError = (0, duplicateErrorHandler_1.duplicateErrorHandler)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSources = simplifiedError.errorSources;
    }
    else if (err instanceof AppError_1.AppError) {
        statusCode = err?.statusCode;
        message = err.message;
        errorSources = [
            {
                path: '',
                message: err.message,
            },
        ];
    }
    else if (err instanceof Error) {
        message = err.message;
        errorSources = [
            {
                path: '',
                message: err.message,
            },
        ];
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
