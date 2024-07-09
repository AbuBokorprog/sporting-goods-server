"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserDetails = void 0;
const zod_1 = require("zod");
exports.createUserDetails = zod_1.z.object({
    name: zod_1.z.string({ message: 'Name is required' }),
    email: zod_1.z
        .string({ message: 'Email is required' })
        .email({ message: 'Must be authentic email' }),
    phone: zod_1.z.number({ message: 'Phone is required' }),
    delivery_address: zod_1.z.string({ message: 'Delivery address is required' }),
});
