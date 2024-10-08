"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = require("../../utils/catchAsync");
const successResponse_1 = require("../../utils/successResponse");
const products_services_1 = require("./products.services");
// create product controller
const createProductIntoDB = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const data = await products_services_1.productsServices.createProductIntoDB(req.body);
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Created successfully',
        data,
    });
});
// retrieve all products controller
const retrieveAllProducts = (0, catchAsync_1.catchAsync)(async (req, res) => {
    // query
    const { category, minPrice, maxPrice, rating, brand, sortOrder, page } = req.query;
    // Build filter object based on query parameters
    const filter = {};
    if (category) {
        filter.category = category;
    }
    if (minPrice) {
        filter.minPrice = parseFloat(minPrice);
    }
    if (maxPrice) {
        filter.maxPrice = parseFloat(maxPrice);
    }
    if (rating) {
        filter.rating = parseFloat(rating);
    }
    if (brand) {
        filter.brand = brand;
    }
    if (sortOrder) {
        filter.sortOrder = sortOrder;
    }
    if (page) {
        filter.page = page;
    }
    // Fetch data with applied filters
    const result = await products_services_1.productsServices.retrieveAllProducts(filter);
    const data = {
        totalPages: result?.totalPages,
        page: result?.page,
        data: result?.sortedProducts,
    };
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Retrieve all products',
        data,
    });
});
// retrieve product controller
const retrieveSingleProduct = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const data = await products_services_1.productsServices.retrieveSingleProduct(req.params.id);
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Retrieve single product',
        data,
    });
});
// retrieve products by search controller
const retrieveProductsBySearch = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const name = req.query.search_term;
    const data = await products_services_1.productsServices.retrieveProductsBySearch(name);
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'retrieve products successfully',
        data,
    });
});
// retrieve products by category controller
const retrieveProductsByCategory = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const data = await products_services_1.productsServices.retrieveProductsByCategory(req.params.category);
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Retrieve products by category',
        data,
    });
});
// update product controller
const updateSingleProduct = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const data = await products_services_1.productsServices.updateSingleProduct(req.params.id, req.body);
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Updated successfully',
        data,
    });
});
// delete product controller
const deleteSingleProduct = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const data = await products_services_1.productsServices.deleteSingleProduct(req.params.id);
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Deleted successfully',
        data,
    });
});
exports.productsControllers = {
    createProductIntoDB,
    retrieveAllProducts,
    retrieveSingleProduct,
    updateSingleProduct,
    deleteSingleProduct,
    retrieveProductsBySearch,
    retrieveProductsByCategory,
};
