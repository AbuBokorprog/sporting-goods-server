"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchAsync = void 0;
const catchAsync = (fc) => {
    return (req, res, next) => {
        Promise.resolve(fc(req, res, next)).catch((err) => next(err));
    };
};
exports.catchAsync = catchAsync;
