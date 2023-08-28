import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // const btnName = "Login";
  const [btnName, setBtnName] = useState("Login");
  const onLineStatus = useOnlineStatus();

  // if no dependency array => useEffect is called on Every Render
  // if there is an empty dependency array ==> useEffect is called once on initial render
  // if dependency array has some value then => useEffect is called only when dependency changes
  useEffect(() => {
    console.log("useEffect Called");
  }, [btnName]);
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
          <li>Online Status: {onLineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

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
