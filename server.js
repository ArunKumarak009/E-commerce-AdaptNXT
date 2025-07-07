// server.js
const express = require('express');

const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require("./config/db")

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');

dotenv.config();

const app = express();

connectDB()

app.use(cors());
app.use(express.json());



// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT , () => console.log(`Server running on port ${PORT}`))



