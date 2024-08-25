"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderSchema = void 0;
const zod_1 = require("zod");
const ProductSchema = zod_1.z.object({
    product_name: zod_1.z.string(),
    image: zod_1.z.array(zod_1.z.string()).min(1),
    category: zod_1.z.string().optional(),
    description: zod_1.z.string(),
    brand: zod_1.z.string(),
    price: zod_1.z.number().positive(),
    product_description: zod_1.z.string(),
    rating: zod_1.z.number().min(0).max(5),
    stock_quantity: zod_1.z.number().int().nonnegative(),
});
exports.createOrderSchema = zod_1.z.object({
    customer_name: zod_1.z.string({ message: 'Customer name is required' }),
    customer_email: zod_1.z.string({ message: 'customer email is required' }),
    customer_phone: zod_1.z.string({ message: 'Customer phone is required' }),
    customer_delivery_address: zod_1.z.string({
        message: 'Customer address is required',
    }),
    products: zod_1.z.array(ProductSchema),
    total_price: zod_1.z.number(),
});
