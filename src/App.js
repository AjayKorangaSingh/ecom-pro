import Navigation from "./customers/components/navigation/Navigation";
import "./App.css";
import Home from "./customers/pages/HomePage/Homepage";
import Footer from "./customers/components/footer/Footer";
import Products from "./customers/components/products/Products";
import ProductDetails from "./customers/components/productDetails/ProductDetails";
import Cart from "./customers/components/cart/cart";
import Checkout from "./customers/components/checkout/checkout";
import { Order } from "./customers/components/order/order";
import OrderDetails from "./customers/components/order/orderDetails";
import { Route, Routes } from "react-router-dom";
import { CustomerRoute } from "./routes/CustomerRoute";
import {Provider} from "react-redux"
import store from "./store/store"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<CustomerRoute />} />
      </Routes>
    </div>
  );
}

export default App;
