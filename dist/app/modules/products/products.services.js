"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = require("../../error/AppError");
const products_model_1 = __importDefault(require("./products.model"));
// create product service
const createProductIntoDB = async (payload) => {
    const result = await products_model_1.default.create(payload);
    // check is not create product
    if (!result) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Created product failed!');
    }
    return result;
};
// retrieve all products with filters
const retrieveAllProducts = async (filter) => {
    // pagination
    const page = Number(filter.page);
    const limit = 10;
    const skip = (Number(page) - 1) * limit;
    const result = await products_model_1.default.find()
        .populate('category')
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 });
    // total products
    const totalProducts = await products_model_1.default.countDocuments();
    // total page
    const totalPages = Math.ceil(totalProducts / limit);
    if (!result || result?.length <= 0) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Product not found!');
    }
    // filter products
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
    // Sort products
    const sortedProducts = result1.sort((a, b) => {
        if (filter.sortOrder === 'price-asc') {
            return a.price - b.price; // Low to high
        }
        else if (filter.sortOrder === 'price-desc') {
            return b.price - a.price; // High to low
        }
        else {
            return 0;
        }
    });
    return {
        sortedProducts,
        totalPages,
        page,
    };
};
// retrieve products by search
const retrieveProductsBySearch = async (name) => {
    const result = await products_model_1.default.find({
        product_name: { $regex: name, $options: 'i' },
    });
    if (!result) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Product not found!');
    }
    return result;
};
// retrieve product
const retrieveSingleProduct = async (id) => {
    const result = await products_model_1.default.findById(id);
    if (!result) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Product not found!');
    }
    return result;
};
// retrieve products by category
const retrieveProductsByCategory = async (category) => {
    const result = await products_model_1.default.find({ category });
    if (!result) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Product not found!');
    }
    return result;
};
// update product
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
// delete product
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
    retrieveProductsBySearch,
};
