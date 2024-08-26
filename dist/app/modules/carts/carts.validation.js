"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCartValidationSchema = exports.createCartValidationSchema = void 0;
const zod_1 = require("zod");
// cart validation schema
exports.createCartValidationSchema = zod_1.z.object({
    product_id: zod_1.z.string({ message: 'Product id is required' }),
});
exports.updateCartValidationSchema = zod_1.z.object({
    product_id: zod_1.z.string().optional(),
});
