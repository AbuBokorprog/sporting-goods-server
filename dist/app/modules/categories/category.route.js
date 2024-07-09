"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validationRequest_1 = require("../../utils/validationRequest");
const category_validation_1 = require("./category.validation");
const category_controller_1 = require("./category.controller");
const route = express_1.default.Router();
route.post('/', (0, validationRequest_1.validationRequest)(category_validation_1.createCategoryValidationSchema), category_controller_1.categoryControllers.createCategory);
route.get('/', category_controller_1.categoryControllers.retrieveAllCategory);
route.get('/:id', category_controller_1.categoryControllers.retrieveSingleCategory);
route.put('/:id', category_controller_1.categoryControllers.updateCategory);
route.delete('/:id', category_controller_1.categoryControllers.deleteCategory);
exports.categoryRoutes = route;
