"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = require("../../utils/catchAsync");
const successResponse_1 = require("../../utils/successResponse");
const category_services_1 = require("./category.services");
const createCategory = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const data = await category_services_1.categoryServices.createCategory(req.body);
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Created category successfully',
        data,
    });
});
const retrieveAllCategory = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const data = await category_services_1.categoryServices.retrieveAllCategory();
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Retrieved all categories successfully',
        data,
    });
});
const retrieveSingleCategory = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const data = await category_services_1.categoryServices.retrieveSingleCategory(req.params.id);
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Retrieved single category successfully',
        data,
    });
});
const updateCategory = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const data = await category_services_1.categoryServices.updateCategory(req.params.id, req.body);
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Updated category successfully',
        data,
    });
});
const deleteCategory = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const data = await category_services_1.categoryServices.deleteCategory(req.params.id);
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Deleted category successfully',
        data,
    });
});
exports.categoryControllers = {
    createCategory,
    retrieveAllCategory,
    retrieveSingleCategory,
    updateCategory,
    deleteCategory,
};
