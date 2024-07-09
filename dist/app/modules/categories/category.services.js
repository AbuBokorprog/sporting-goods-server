"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryServices = void 0;
const category_model_1 = require("./category.model");
const createCategory = async (payload) => {
    const result = await category_model_1.Category.create(payload);
    return result;
};
const retrieveAllCategory = async () => {
    const result = await category_model_1.Category.find();
    return result;
};
const retrieveSingleCategory = async (id) => {
    const result = await category_model_1.Category.findById(id);
    return result;
};
const updateCategory = async (id, payload) => {
    const result = await category_model_1.Category.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
};
const deleteCategory = async (id) => {
    const result = await category_model_1.Category.findByIdAndDelete(id);
    return result;
};
exports.categoryServices = {
    createCategory,
    retrieveAllCategory,
    retrieveSingleCategory,
    updateCategory,
    deleteCategory,
};
