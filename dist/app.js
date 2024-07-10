"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const globalError_1 = require("./app/error/globalError");
const notFound_1 = require("./app/error/notFound");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('Welcome to the Sporting Goods Shop!');
});
app.use('/api', routes_1.default);
app.use(globalError_1.globalErrorHandler);
app.use(notFound_1.notFoundError);
exports.default = app;
