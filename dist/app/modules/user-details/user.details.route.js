"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDetailsRoute = void 0;
const express_1 = __importDefault(require("express"));
const user_details_controller_1 = require("./user.details.controller");
const route = express_1.default.Router();
route.get('/', user_details_controller_1.userDetailsController.retrieveAllUserDetails);
route.delete('/:id', user_details_controller_1.userDetailsController.DeleteUserDetails);
exports.userDetailsRoute = route;
