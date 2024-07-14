"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongoose_1 = require("mongoose");
const CategorySchema = new mongoose_1.Schema({
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    category_name: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
exports.Category = (0, mongoose_1.model)('category', CategorySchema);
