"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryServices = void 0;
const category_model_1 = require("./category.model");
const createCategory = async (payload) => {
    const data = await category_model_1.Category.create(payload);
    return data;
};
const retrieveAllCategory = async () => {
    const data = await category_model_1.Category.find();
    return data;
};
const retrieveSingleCategory = async (id) => {
    const data = await category_model_1.Category.findById(id);
    return data;
};
const updateCategory = async (id, payload) => {
    const data = await category_model_1.Category.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return data;
};
const deleteCategory = async (id) => {
    const data = await category_model_1.Category.findByIdAndDelete(id);
    return data;
};
exports.categoryServices = {
    createCategory,
    retrieveAllCategory,
    retrieveSingleCategory,
    updateCategory,
    deleteCategory,
};
