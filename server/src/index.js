const express = require("express");
const cors = require("cors");
const authRouter = require('./route/auth.route');
const userRouter = require('./route/user.route');
const productRouter = require('./route/productRoute');
const adminProductRouter = require('./route/adminProductRouter');
const cartRouter = require('./route/cartRoutes');
const cartItemRouter = require('./route/cartItemRoute');
const orderRouter = require('./route/orderRoute');
const reviewRouter = require('./route/reviewRoute');
const ratingRouter = require('./route/ratingRouter');
const adminOrderRoute = require('./route/adminOrderRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  return res.send({ status: "ok" });
});

// Define routes
app.use('/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/products', productRouter);
app.use('/api/admin/products', adminProductRouter); // Fixed 'amin' to 'admin'
app.use('/api/cart', cartRouter);
app.use('/api/cart_items', cartItemRouter);
app.use('/api/order', orderRouter);
app.use('/api/reviews', reviewRouter); // Fixed incorrect syntax
app.use('/api/rating', ratingRouter); // Fixed incorrect syntax
app.use('/api/admin/orders', adminOrderRoute);

module.exports = app;
