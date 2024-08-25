"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderServices = void 0;
const mongoose_1 = require("mongoose");
const order_model_1 = require("./order.model");
const carts_model_1 = require("../carts/carts.model");
const createOrder = async (payload) => {
    const session = await (0, mongoose_1.startSession)();
    try {
        session.startTransaction();
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
};
