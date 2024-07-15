"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = require("../../error/AppError");
const products_model_1 = __importDefault(require("./products.model"));
const createProductIntoDB = async (payload) => {
    const result = await products_model_1.default.create(payload);
    if (!result) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Created product failed!');
    }
    return result;
};
const retrieveAllProducts = async () => {
    const result = await products_model_1.default.find().populate('category');
    if (!result || result?.length <= 0) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Product not found!');
    }
    return result;
};
const retrieveSingleProduct = async (id) => {
    const result = await products_model_1.default.findById(id);
    if (!result) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Product not found!');
    }
    return result;
};
const updateSingleProduct = async (id, payload) => {
    const result = await products_model_1.default.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Update product failed!');
    }
    return result;
};
const deleteSingleProduct = async (id) => {
    const result = await products_model_1.default.findByIdAndDelete(id);
    if (!result) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Delete product failed!');
    }
    return result;
};
exports.productsServices = {
    createProductIntoDB,
    retrieveAllProducts,
    retrieveSingleProduct,
    updateSingleProduct,
    deleteSingleProduct,
};
