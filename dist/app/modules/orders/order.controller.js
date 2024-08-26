"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = require("../../utils/catchAsync");
const successResponse_1 = require("../../utils/successResponse");
const order_services_1 = require("./order.services");
// create order controller
const createOrder = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const data = await order_services_1.orderServices.createOrder(req.body);
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'create order successfully',
        data,
    });
});
// online payment order controller
const onlinePayment = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const data = await order_services_1.orderServices.onlinePayment(req.body);
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Payment successful!',
        data,
    });
});
// retrieve all order controller
const retrieveAllOrder = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const data = await order_services_1.orderServices.retrieveAllOrder();
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'retrieve all order successfully',
        data,
    });
});
// retrieve single order controller
const retrieveSingleOrder = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const data = await order_services_1.orderServices.retrieveSingleOrder(req.params.id);
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'retrieve single order successfully',
        data,
    });
});
// update order
const updateSingleOrder = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const data = await order_services_1.orderServices.updateSingleOrder(req.params.id, req.body);
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'update single order successfully',
        data,
    });
});
// delete order
const deleteSingleOrder = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const data = await order_services_1.orderServices.deleteSingleOrder(req.params.id);
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'delete single order successfully',
        data,
    });
});
exports.orderController = {
    createOrder,
    retrieveAllOrder,
    retrieveSingleOrder,
    updateSingleOrder,
    deleteSingleOrder,
    onlinePayment,
};
