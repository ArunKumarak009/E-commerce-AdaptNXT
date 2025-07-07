

# E-commerce Backend API

This is the backend for a basic e-commerce platform built using Node.js, Express, MongoDB, and JWT authentication. It supports user registration/login, product listings, cart management, and order creation.

## 📦 Features
- User authentication (JWT)
- Role-based access (customer & admin)
- Product CRUD (admin)
- Cart management (customer)
- Order creation from cart (customer)

## 📁 Folder Structure
- `routes/` - Route definitions
- `controllers/` - Logic for each feature
- `models/` - Mongoose schemas
- `middleware/` - Auth and role middleware

## ⚙️ Setup
1. Clone the repo
2. Run `npm install`
3. Create a `.env` file:

```
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret_key
PORT=5000

```

4. Run the server:
```
npm run dev
```

## 🚀 API Endpoints
### Auth
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user

### Products
- `GET /api/products` - List products (all users)
- `POST /api/products` - Add product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Cart
- `GET /api/cart` - View cart (customer)
- `POST /api/cart` - Add to cart
- `PUT /api/cart` - Update cart item
- `DELETE /api/cart/:productId` - Remove from cart

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - View user orders

## 🛠 Tech Stack
- Node.js + Express
- MongoDB + Mongoose
- JSON Web Tokens (JWT)


