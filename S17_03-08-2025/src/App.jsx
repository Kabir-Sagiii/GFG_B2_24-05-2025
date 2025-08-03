import Nav from "./components/routing/nav/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/routing/home/Home";
import Profile from "./components/routing/profile/Profile";
import Products from "./components/routing/products/Products.jsx";

import Contact from "./components/routing/contactus/ContactUs";
import ProductDetails from "./components/routing/product-details/ProductDetails";
import Cart from "./components/routing/cart/Cart";
import Input from "./redux/components/Input";
import Text from "./redux/components/Text";
import { Toaster } from "react-hot-toast";
import CustomHook from "./custom-hook/CustomHook.jsx";
function App() {
  return (
    <div>
      <Toaster />
      <Nav />
      <CustomHook />

      {/* <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/shop"} element={<Products />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/product-details/:id"} element={<ProductDetails />} />
      </Routes> */}
    </div>
  );
}

export default App;
