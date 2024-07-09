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
const createProductIntoDB = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const data = await products_services_1.productsServices.createProductIntoDB(req.body);
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Created successfully',
        data,
    });
});
const retrieveAllProducts = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const data = await products_services_1.productsServices.retrieveAllProducts();
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Retrieve all products',
        data,
    });
});
const retrieveSingleProduct = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const data = await products_services_1.productsServices.retrieveSingleProduct(req.params.id);
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Retrieve single product',
        data,
    });
});
const updateSingleProduct = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const data = await products_services_1.productsServices.updateSingleProduct(req.params.id, req.body);
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Updated successfully',
        data,
    });
});
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
};
