"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validationRequest_1 = require("../../utils/validationRequest");
const order_validation_1 = require("./order.validation");
const order_controller_1 = require("./order.controller");
const route = express_1.default.Router();
route.post('/', (0, validationRequest_1.validationRequest)(order_validation_1.createOrderSchema), order_controller_1.orderController.createOrder);
route.get('/', order_controller_1.orderController.retrieveAllOrder);
route.get('/:id', order_controller_1.orderController.retrieveSingleOrder);
route.put('/:id', order_controller_1.orderController.updateSingleOrder);
route.delete('/:id', order_controller_1.orderController.deleteSingleOrder);
exports.OrderRoutes = route;
