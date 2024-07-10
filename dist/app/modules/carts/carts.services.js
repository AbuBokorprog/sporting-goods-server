"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const products_model_1 = __importDefault(require("../products/products.model"));
const carts_model_1 = require("./carts.model");
const AppError_1 = require("../../error/AppError");
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
    if (!result || result?.length <= 0) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Carts not found!');
    }
    return result;
};
const retrieveSingleCart = async (id) => {
    const result = await carts_model_1.Cart.findById(id);
    if (!result) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Cart not found!');
    }
    return result;
};
const updateCart = async (id, payload) => {
    const vat = 0.15;
    const isExistCart = await carts_model_1.Cart.findById(id);
    if (!isExistCart) {
        throw new Error('Cart not found');
    }
    // check isExistProduct
    const isExistProduct = await products_model_1.default.findById(isExistCart?.product_id);
    if (!isExistProduct) {
        throw new Error('The product not found');
    }
    // if payload.quantity === -1 cart quantity and total_price will be decrease
    if (payload.quantity === -1) {
        isExistCart.quantity = isExistCart.quantity - 1;
        // total price of product
        const totalPriceWithoutVat = isExistProduct?.price * isExistCart.quantity;
        const totalPriceWithVat = (totalPriceWithoutVat +
            totalPriceWithoutVat * vat).toFixed(2);
        // set total price with vat
        isExistCart.total_price = Number(totalPriceWithVat);
        await isExistCart.save();
        return isExistCart;
    }
    else {
        // if payload.quantity !== -1 cart quantity and total_price will be decrease
        isExistCart.quantity = isExistCart.quantity + 1;
        // total price of product
        const totalPriceWithoutVat = isExistProduct?.price * isExistCart.quantity;
        const totalPriceWithVat = (totalPriceWithoutVat +
            totalPriceWithoutVat * vat).toFixed(2);
        // set total price with vat
        isExistCart.total_price = Number(totalPriceWithVat);
        await isExistCart.save();
        return isExistCart;
    }
};
const deleteCart = async (id) => {
    const result = await carts_model_1.Cart.findByIdAndDelete(id);
    if (!result) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Delete cart failed!');
    }
    return result;
};
exports.cartServices = {
    createCart,
    retrieveAllCart,
    retrieveSingleCart,
    updateCart,
    deleteCart,
};
