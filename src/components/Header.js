import { useState } from "react";

const Header = () => {
  // const btnName = "Login";
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src={require("../assests/food-app-logo.jpg")}
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
