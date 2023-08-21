import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(Render)
// React Element

/*
 * Food App Design
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Searchh
 *  - ResturantConyainer
 *    -- ResturantCard
 *      -- img
 *      -- Name of Res, Star Rating, cuising, Delivery ETA
 * Footer
 *  -- Copyright
 *  -- Links
 *  -- Address
 *  --Contact
 *  -- Any add ons
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
