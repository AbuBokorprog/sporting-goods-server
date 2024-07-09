"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsServices = void 0;
const products_model_1 = __importDefault(require("./products.model"));
const createProductIntoDB = async (payload) => {
    const result = await products_model_1.default.create(payload);
    return result;
};
const retrieveAllProducts = async () => {
    const result = await products_model_1.default.find();
    return result;
};
const retrieveSingleProduct = async (id) => {
    const result = await products_model_1.default.findById(id);
    return result;
};
const updateSingleProduct = async (id, payload) => {
    const result = await products_model_1.default.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
};
const deleteSingleProduct = async (id) => {
    const result = await products_model_1.default.findByIdAndDelete(id);
    return result;
};
exports.productsServices = {
    createProductIntoDB,
    retrieveAllProducts,
    retrieveSingleProduct,
    updateSingleProduct,
    deleteSingleProduct,
};
