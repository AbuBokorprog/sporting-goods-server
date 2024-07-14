"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = require("../../error/AppError");
const category_model_1 = require("./category.model");
const createCategory = async (payload) => {
    payload.slug = payload.category_name.toLowerCase();
    const result = await category_model_1.Category.create(payload);
    if (!result) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Create category failed!');
    }
    return result;
};
const retrieveAllCategory = async () => {
    const result = await category_model_1.Category.find();
    if (!result || result?.length <= 0) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Category not found!');
    }
    return result;
};
const retrieveSingleCategory = async (id) => {
    const result = await category_model_1.Category.findById(id);
    if (!result) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Category not found!');
    }
    return result;
};
const updateCategory = async (id, payload) => {
    const result = await category_model_1.Category.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'update category failed!');
    }
    return result;
};
const deleteCategory = async (id) => {
    const result = await category_model_1.Category.findByIdAndDelete(id);
    if (!result) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'delete category failed!');
    }
    return result;
};
exports.categoryServices = {
    createCategory,
    retrieveAllCategory,
    retrieveSingleCategory,
    updateCategory,
    deleteCategory,
};
