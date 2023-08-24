import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// JSX => Babel transpile it to React.createElement => ReactElement-JS Object => HTMLElement(Render)
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
 *      -- Name of Res, Star Rating, cuisine, Delivery ETA
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
      {/* if path is / load Body */}
      <Outlet />
      {/* if path is /about load About */}
      {/* if path is /contact load Contact */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
