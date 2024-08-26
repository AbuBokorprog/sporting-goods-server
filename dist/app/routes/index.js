"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_route_1 = require("../modules/products/products.route");
const category_route_1 = require("../modules/categories/category.route");
const user_details_route_1 = require("../modules/user-details/user.details.route");
const carts_route_1 = require("../modules/carts/carts.route");
const order_route_1 = require("../modules/orders/order.route");
const router = express_1.default.Router();
// Routes
const moduleRoutes = [
    {
        path: '/products',
        route: products_route_1.productsRoutes,
    },
    {
        path: '/categories',
        route: category_route_1.categoryRoutes,
    },
    {
        path: '/user-details',
        route: user_details_route_1.userDetailsRoute,
    },
    {
        path: '/cart',
        route: carts_route_1.cartRoute,
    },
    {
        path: '/orders',
        route: order_route_1.OrderRoutes,
    },
];
moduleRoutes.forEach((r) => router.use(r.path, r.route));
exports.default = router;
