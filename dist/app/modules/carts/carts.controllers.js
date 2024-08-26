"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = require("../../utils/catchAsync");
const successResponse_1 = require("../../utils/successResponse");
const carts_services_1 = require("./carts.services");
// create cart controller
const createCart = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const data = await carts_services_1.cartServices.createCart(req.body);
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Cart created successfully',
        data,
    });
});
// retrieve all carts
const retrieveAllCart = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const data = await carts_services_1.cartServices.retrieveAllCart();
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Cart retrieved successfully',
        data,
    });
});
// retrieve specific single cart
const retrieveSingleCart = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const data = await carts_services_1.cartServices.retrieveSingleCart(req.params.id);
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Cart retrieved successfully',
        data,
    });
});
// update cart controller
const updateCart = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const data = await carts_services_1.cartServices.updateCart(req.params.id, req.body);
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Cart updated successfully',
        data,
    });
});
// delete cart controller
const deleteCart = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const data = await carts_services_1.cartServices.deleteCart(req.params.id);
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Cart deleted successfully',
        data,
    });
});
exports.cartController = {
    createCart,
    retrieveAllCart,
    retrieveSingleCart,
    updateCart,
    deleteCart,
};
