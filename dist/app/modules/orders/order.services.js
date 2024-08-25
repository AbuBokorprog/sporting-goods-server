"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderServices = void 0;
const mongoose_1 = require("mongoose");
const order_model_1 = require("./order.model");
const carts_model_1 = require("../carts/carts.model");
const stripe_1 = __importDefault(require("stripe"));
const config_1 = __importDefault(require("../../config"));
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = require("../../error/AppError");
const stripe = new stripe_1.default(config_1.default.secret_key);
const createOrder = async (payload) => {
    const session = await (0, mongoose_1.startSession)();
    if (payload?.payment_method === 'Cash on Delivery') {
        try {
            session.startTransaction();
            payload.isSuccess = true;
            const result = await order_model_1.Order.create([payload], { session });
            await carts_model_1.Cart.deleteMany({}, { session });
            await session.commitTransaction();
            session.endSession();
            return result;
        }
        catch (error) {
            await session.abortTransaction();
            session.endSession();
            throw new Error('Error place order');
        }
    }
    else {
        try {
            session.startTransaction();
            payload.isSuccess = false;
            const result = await order_model_1.Order.create([payload], { session });
            await carts_model_1.Cart.deleteMany({}, { session });
            await session.commitTransaction();
            session.endSession();
            return result;
        }
        catch (error) {
            await session.abortTransaction();
            session.endSession();
            throw new Error('Error place order');
        }
    }
};
const onlinePayment = async ({ paymentMethodId, productId, }) => {
    const isExistOrder = await order_model_1.Order.findById(productId);
    try {
        if (!isExistOrder) {
            throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, 'Order not exist');
        }
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 5000, // Replace with the actual amount in cents
            currency: 'usd',
            payment_method: paymentMethodId,
            confirm: true,
            automatic_payment_methods: {
                enabled: true,
                allow_redirects: 'never', // Prevents redirect-based payment methods
            },
        });
        isExistOrder.isSuccess = true;
        isExistOrder.save();
        return { clientSecret: paymentIntent.client_secret };
    }
    catch (error) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Online payment failed!');
    }
};
const retrieveAllOrder = async () => {
    const result = await order_model_1.Order.find();
    return result;
};
const retrieveSingleOrder = async (id) => {
    const result = await order_model_1.Order.findById(id);
    return result;
};
const updateSingleOrder = async (id, payload) => {
    const result = await order_model_1.Order.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
};
const deleteSingleOrder = async (id) => {
    const result = await order_model_1.Order.findByIdAndDelete(id);
    return result;
};
exports.orderServices = {
    createOrder,
    retrieveAllOrder,
    retrieveSingleOrder,
    updateSingleOrder,
    deleteSingleOrder,
    onlinePayment,
};
