"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRoute = void 0;
const express_1 = __importDefault(require("express"));
const validationRequest_1 = require("../../utils/validationRequest");
const carts_validation_1 = require("./carts.validation");
const carts_controllers_1 = require("./carts.controllers");
const route = express_1.default.Router();
route.post('/', (0, validationRequest_1.validationRequest)(carts_validation_1.createCartValidationSchema), carts_controllers_1.cartController.createCart);
route.get('/', carts_controllers_1.cartController.retrieveAllCart);
route.get('/:id', carts_controllers_1.cartController.retrieveSingleCart);
route.put('/:id', (0, validationRequest_1.validationRequest)(carts_validation_1.updateCartValidationSchema), carts_controllers_1.cartController.updateCart);
route.delete('/:id', carts_controllers_1.cartController.deleteCart);
exports.cartRoute = route;
