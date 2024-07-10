"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
const ValidationError = (err) => {
    const errorSources = Object.values(err.errors).map((err) => {
        return {
            path: err.path,
            message: err.message,
        };
    });
    return {
        statusCode: 400,
        message: 'Mongoose validation Error',
        errorSources,
    };
};
exports.ValidationError = ValidationError;
