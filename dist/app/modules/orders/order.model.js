"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
// Define the Products schema
const ProductsSchema = new mongoose_1.Schema({
    product_name: {
        type: String,
        required: true,
    },
    image: {
        type: [String],
        required: true,
    },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'category',
    },
    description: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    product_description: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    stock_quantity: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});
// Define the Order schema
const OrderSchema = new mongoose_1.Schema({
    customer_name: {
        type: String,
        required: true,
    },
    customer_email: {
        type: String,
        required: true,
    },
    customer_phone: {
        type: String,
        required: true,
    },
    customer_delivery_address: {
        type: String,
        required: true,
    },
    products: {
        type: [ProductsSchema],
        required: true,
    },
    total_price: {
        type: Number,
        required: true,
    },
    isSuccess: {
        type: Boolean,
    },
    payment_method: {
        type: String,
        required: true,
    },
});
exports.Order = (0, mongoose_1.model)('order', OrderSchema);
