"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategoryValidationSchema = exports.createCategoryValidationSchema = void 0;
const zod_1 = require("zod");
// categories validation schema
exports.createCategoryValidationSchema = zod_1.z.object({
    category_name: zod_1.z.string({ message: 'Category name is required' }),
    image: zod_1.z.string({ message: 'Image is required' }),
});
exports.updateCategoryValidationSchema = zod_1.z.object({
    category_name: zod_1.z.string().optional(),
    image: zod_1.z.string().optional(),
});
