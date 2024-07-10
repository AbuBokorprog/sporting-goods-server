"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.castErrorhandler = void 0;
const castErrorhandler = (error) => {
    const errorSources = [
        {
            path: error.path,
            message: error.message,
        },
    ];
    return {
        statusCode: 400,
        message: 'Mongoose cast error',
        errorSources,
    };
};
exports.castErrorhandler = castErrorhandler;
