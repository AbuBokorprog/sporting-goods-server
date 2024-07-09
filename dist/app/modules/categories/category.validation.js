"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategoryValidationSchema = exports.createCategoryValidationSchema = void 0;
const zod_1 = require("zod");
exports.createCategoryValidationSchema = zod_1.z.object({
    slug: zod_1.z.string({ message: 'Slug is required' }),
    category_name: zod_1.z.string({ message: 'Category name is required' }),
});
exports.updateCategoryValidationSchema = zod_1.z.object({
    slug: zod_1.z.string().optional(),
    category_name: zod_1.z.string().optional(),
});
