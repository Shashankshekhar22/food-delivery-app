import React from "react";
import ReactDOM from "react-dom/client";

// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(Render)
// React Element

/*
 * Food App Design
 *  - Logo
 *  - Nav Items
 * Body
 *  - Searchh
 *  - ResturantConyainer
 *    -- ResturantCard
 * Footer
 *  -- Copyright
 *  -- Links
 *  -- Address
 *  --Contact
 *  -- Any add ons
 */

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src={require("./assests/food-app-logo.jpg")}
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
