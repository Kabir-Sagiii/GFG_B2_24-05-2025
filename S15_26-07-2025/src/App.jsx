import Nav from "./components/routing/nav/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/routing/home/Home";
import Profile from "./components/routing/profile/Profile";
import Products from "./components/routing/products/Products";
import A from "./components/context-api/A";
import Contact from "./components/routing/contactus/ContactUs";
import ProductDetails from "./components/routing/product-details/ProductDetails";
function App() {
  return (
    <div>
      <Nav />
      <A />

      {/* <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/shop"} element={<Products />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/product-details/:id"} element={<ProductDetails />} />
      </Routes> */}
    </div>
  );
}

export default App;
