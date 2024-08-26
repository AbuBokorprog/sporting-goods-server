"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const mongoose_1 = require("mongoose");
// cart model
const cartsSchema = new mongoose_1.Schema({
    product_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'product',
        unique: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    total_price: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});
exports.Cart = (0, mongoose_1.model)('cart', cartsSchema);
