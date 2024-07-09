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
const retrieveAllProducts = async () => { };
const retrieveSingleProduct = async () => { };
const updateSingleProduct = async () => { };
const deleteSingleProduct = async () => { };
exports.productsServices = {
    createProductIntoDB,
    retrieveAllProducts,
    retrieveSingleProduct,
    updateSingleProduct,
    deleteSingleProduct,
};
