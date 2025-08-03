import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="nav">
      <div className="brandName">
        <h1>BrandName</h1>
      </div>
      <div className="menus">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/shop">Shopnow</Link>
        <Link to="/contact">ContactUs</Link>

        <button>Logout</button>
      </div>
    </div>
  );
}

export default Nav;
