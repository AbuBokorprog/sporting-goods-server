"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
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
        type: Object,
        required: true,
    },
    total_price: {
        type: Number,
        required: true,
    },
});
exports.Order = (0, mongoose_1.model)('order', OrderSchema);
