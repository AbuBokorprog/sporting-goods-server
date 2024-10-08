"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodErrorHandler = void 0;
const zodErrorHandler = (err) => {
    const errorSources = err.issues.map((issue) => {
        return {
            path: issue.path[issue.path.length - 1],
            message: issue.message,
        };
    });
    const statusCode = 400;
    return {
        statusCode,
        message: 'Zod error',
        errorSources,
    };
};
exports.zodErrorHandler = zodErrorHandler;
