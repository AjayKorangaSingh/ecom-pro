import { Route, Routes } from "react-router-dom";
import Home from "../customers/pages/HomePage/Homepage";
import Cart from "../customers/components/cart/cart";
import Navigation from "../customers/components/navigation/Navigation";
import Footer from "../customers/components/footer/Footer";
import Products from "../customers/components/products/Products";
import ProductDetails from "../customers/components/productDetails/ProductDetails";
import Checkout from "../customers/components/checkout/checkout";
import { Order } from "../customers/components/order/order";
import OrderDetails from "../customers/components/order/orderDetails";
export function CustomerRoute() {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Home />} />
        <Route path="/register" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:oneId/:twoId/:ThirdId" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}
