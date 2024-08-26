"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductValidationSchema = exports.createdProductValidationSchema = void 0;
const zod_1 = require("zod");
// products validation schema
const createdProductValidationSchema = zod_1.z.object({
    product_name: zod_1.z.string(),
    image: zod_1.z.array(zod_1.z.string()),
    category: zod_1.z.string(),
    description: zod_1.z.string(),
    brand: zod_1.z.string(),
    price: zod_1.z.number().positive(),
    product_description: zod_1.z.string(),
    rating: zod_1.z.number().min(0).max(5),
    stock_quantity: zod_1.z.number().int().nonnegative(),
});
exports.createdProductValidationSchema = createdProductValidationSchema;
const updateProductValidationSchema = zod_1.z.object({
    product_name: zod_1.z.string().optional(),
    image: zod_1.z.array(zod_1.z.string()).optional(),
    category: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    brand: zod_1.z.string().optional(),
    price: zod_1.z.number().positive().optional(),
    product_description: zod_1.z.string().optional(),
    rating: zod_1.z.number().min(0).max(5).optional(),
    stock_quantity: zod_1.z.number().int().nonnegative().optional(),
});
exports.updateProductValidationSchema = updateProductValidationSchema;
