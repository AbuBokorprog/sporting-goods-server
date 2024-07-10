"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundError = void 0;
const notFoundError = (req, res, 
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
next) => {
    return res.status(404).json({
        statusCode: 404,
        success: false,
        message: 'Not Found',
    });
};
exports.notFoundError = notFoundError;
