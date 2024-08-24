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
const retrieveAllProducts = async (filter) => {
    // pagination
    const page = Number(filter.page);
    const limit = 10;
    const skip = (Number(page) - 1) * limit;
    const result = await products_model_1.default.find()
        .populate('category')
        .skip(skip)
        .limit(limit);
    const totalProducts = await products_model_1.default.countDocuments(); // Total number of products
    const totalPages = Math.ceil(totalProducts / limit); // Total number of pages
    if (!result || result?.length <= 0) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Product not found!');
    }
    // Apply additional filtering on the server side
    const result1 = result.filter((product) => {
        let matches = true;
        if (filter.category &&
            product.category._id.toString() !== filter.category) {
            matches = false;
        }
        if (filter.minPrice !== undefined && product.price < filter.minPrice) {
            matches = false;
        }
        if (filter.maxPrice !== undefined && product.price > filter.maxPrice) {
            matches = false;
        }
        if (filter.rating !== undefined && product.rating < filter.rating) {
            matches = false;
        }
        if (filter.brand && product.brand !== filter.brand) {
            matches = false;
        }
        return matches;
    });
    // Sort the filtered products
    const sortedProducts = result1.sort((a, b) => {
        if (filter.sortOrder === 'price-asc') {
            return a.price - b.price; // Low to high
        }
        else if (filter.sortOrder === 'price-desc') {
            return b.price - a.price; // High to low
        }
        else {
            return 0; // No sorting
        }
    });
    return {
        sortedProducts,
        totalPages,
        page,
    };
};
const retrieveSingleProduct = async (id) => {
    const result = await products_model_1.default.findById(id);
    if (!result) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Product not found!');
    }
    return result;
};
const retrieveProductsByCategory = async (category) => {
    const result = await products_model_1.default.find({ category });
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
    retrieveProductsByCategory,
    updateSingleProduct,
    deleteSingleProduct,
};
