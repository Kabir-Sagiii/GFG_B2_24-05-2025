import Nav from "./components/routing/nav/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/routing/home/Home";
import Profile from "./components/routing/profile/Profile";
import Products from "./components/routing/products/Products";

import Contact from "./components/routing/contactus/ContactUs";
import ProductDetails from "./components/routing/product-details/ProductDetails";
import Cart from "./components/routing/cart/Cart";
import Input from "./redux/components/Input";
import Text from "./redux/components/Text";
import CustomCounter from "./components/hook/CustomCounter";
function App() {
  return (
    <div>
      <Nav />
      <CustomCounter />
      <Input />
      <br />
      <hr /> <br />
      <Text />
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
