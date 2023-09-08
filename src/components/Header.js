import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  // const btnName = "Login";
  const [btnName, setBtnName] = useState("Login");
  const onLineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  // if no dependency array => useEffect is called on Every Render
  // if there is an empty dependency array ==> useEffect is called once on initial render
  // if dependency array has some value then => useEffect is called only when dependency changes
  useEffect(() => {
    console.log("useEffect Called");
  }, [btnName]);
  return (
    <div className="flex justify-between bg-slate-300 shadow-lg">
      <div>
        <img
          className="w-40"
          src={require("../assests/food-app-logo.jpg")}
        ></img>
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-4 font-bold  px-6 mx-4">
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
          <li>
            <Link to="/grocery">Grocery</Link>
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
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
