# Sporting Goods

## Introduction

This is a simple e-commerce project for sporting goods, allowing users to browse products by category, add items to a cart, place orders, and manage product categories. The project is built using modern technologies for both the front-end and back-end.

## Project Description

### Purpose

The primary purpose of this project is to create an online platform for users to explore, search, and purchase sporting goods. It is designed to deliver a user-friendly experience where customers can browse through various categories of sports equipment, add items to their cart, proceed to checkout, and complete transactions using a secure payment gateway. The application also includes features for product and category management, tailored for administrators to keep the site up-to-date.

### Goals

-**User Experience:**
Provide a seamless and intuitive user experience for customers to browse, search, and filter products by categories, ratings, and price range.Implement a responsive design to ensure accessibility across devices, including desktops, tablets, and smartphones.

-**Functionality:**
Enable users to create accounts, log in, and manage their cart and orders efficiently.
Integrate a search functionality to allow users to quickly find products by name or category.
Implement secure payment processing using the Stripe API to handle transactions and protect user data.

## Features

- **Browse Products**: Users can browse sporting goods categorized by type.
- **Cart Functionality**: Users can add items to their cart.
- **Order Placement**: Users can place orders for the items in their cart.
- **Category Management**: Users can add, delete, and update product categories.
- **Product Management**: Users can add, delete, and update products.

## Technology Stack

### Back-End

- **Node.js**: A JavaScript runtime environment.
- **Express**: A fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: A NoSQL database used to store data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Zod**: A TypeScript-first schema declaration and validation library.
- **TypeScript**: Ensures type safety and improves the development experience.

## Installation Guideline

To get started with the Sporting Goods project, follow these steps:

### Prerequisites

- TypeScript
- Mongoose
- Zod

### Installation Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AbuBokorprog/sporting-goods-server
   cd sporting-goods-server
   ```

2. **Install dependencies**:

   - Install back-end dependencies:

     ```bash
     npm install
     ```

3. **Set up environment variables**:

   - Create a `.env` file in the `server` directory and add the following:

     ```plaintext
     MONGO_URI=your_mongodb_connection_string
     PORT=5000
     STRIPE_PUBLISHABLE_KEY = provide your publishable key
     STRIPE_SECRET_KEY = provide your secret key
     ```

4. **Run the application**:

   - Start the back-end server:

     ```bash
     npm run dev
     npm run w --for compiled into JS
     ```

5. **Open your browser** and navigate to `http://localhost:5000` to see the application in action.

## Usage

- **User Actions**:

  - Browse sporting goods by category.
  - Add items to the cart.
  - Place orders for the items in the cart.
  - Add, delete, and update product categories.
  - Add, delete, and update products.

## API Endpoints

- **GET /api/categories**: Fetch all categories.
- **POST /api/categories**: Add a new category (Admin only).
- **PUT /api/categories/:id**: Update a category (Admin only).
- **DELETE /api/categories/:id**: Delete a category (Admin only).

- **GET /api/products**: Fetch all products.
- **POST /api/products**: Add a new product (Admin only).
- **PUT /api/products/:id**: Update a product (Admin only).
- **DELETE /api/products/:id**: Delete a product (Admin only).

- **POST /api/cart**: Add an item to the cart.
- **GET /api/cart**: Fetch all items in the cart.
- **DELETE /api/cart/:id**: Remove an item from the cart.
- **PUT /api/cart/:id**: Update cart quantity
- **POST /api/orders**: Place an order.

## Validation

The application uses **Zod** for schema validation on both the client-side and server-side. This ensures that the data passed between the front-end and back-end is correctly typed and validated.
