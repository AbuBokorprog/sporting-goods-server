"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const products_controller_1 = require("./products.controller");
const validationRequest_1 = require("../../utils/validationRequest");
const products_validation_1 = require("./products.validation");
const route = express_1.default.Router();
route.post('/', (0, validationRequest_1.validationRequest)(products_validation_1.createdProductValidationSchema), products_controller_1.productsControllers.createProductIntoDB);
route.get('/', products_controller_1.productsControllers.retrieveAllProducts);
route.get('/:id', products_controller_1.productsControllers.retrieveSingleProduct);
route.put('/:id', products_controller_1.productsControllers.updateSingleProduct);
route.delete('/:id', products_controller_1.productsControllers.deleteSingleProduct);
exports.productsRoutes = route;
