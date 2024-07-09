"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartServices = void 0;
const products_model_1 = __importDefault(require("../products/products.model"));
const carts_model_1 = require("./carts.model");
const createCart = async (payload) => {
    // vat 0.15 add in total price
    const vat = 0.15;
    // check isExistProduct
    const isExistProduct = await products_model_1.default.findById(payload.product_id);
    if (!isExistProduct) {
        throw new Error('The product not found');
    }
    // check is product already exist in cart?
    const isExistCart = await carts_model_1.Cart.findOne({ product_id: payload.product_id });
    if (isExistCart) {
        // quantity increase if exist same product is cart
        isExistCart.quantity = isExistCart.quantity + 1;
        // total price of product
        const totalPriceWithoutVat = isExistProduct?.price * isExistCart.quantity;
        const totalPriceWithVat = (totalPriceWithoutVat +
            totalPriceWithoutVat * vat).toFixed(2);
        // set total price with vat
        isExistCart.total_price = Number(totalPriceWithVat);
        // save existingCart
        await isExistCart.save();
        return isExistCart;
    }
    else {
        // if cart of product is new
        const total_price = Number(isExistProduct.price + isExistProduct.price * vat).toFixed(2);
        payload.total_price = Number(total_price);
        payload.quantity = 1;
        const result = await carts_model_1.Cart.create(payload);
        return result;
    }
};
const retrieveAllCart = async () => {
    const result = await carts_model_1.Cart.find().populate('product_id');
    return result;
};
const retrieveSingleCart = async (id) => {
    const result = await carts_model_1.Cart.findById(id);
    return result;
};
const updateCart = async (id, payload) => {
    const result = await carts_model_1.Cart.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
};
const deleteCart = async (id) => {
    const result = await carts_model_1.Cart.findByIdAndDelete(id);
    return result;
};
exports.cartServices = {
    createCart,
    retrieveAllCart,
    retrieveSingleCart,
    updateCart,
    deleteCart,
};
