"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDetails = void 0;
const mongoose_1 = require("mongoose");
const userDetailsSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
    },
    delivery_address: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
exports.UserDetails = (0, mongoose_1.model)('user-detail', userDetailsSchema);
