"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategoryValidationSchema = exports.createCategoryValidationSchema = void 0;
const zod_1 = require("zod");
exports.createCategoryValidationSchema = zod_1.z.object({
    category_name: zod_1.z.string({ message: 'Category name is required' }),
});
exports.updateCategoryValidationSchema = zod_1.z.object({
    category_name: zod_1.z.string().optional(),
});
