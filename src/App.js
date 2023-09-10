import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
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

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const Cart = lazy(() => import("./components/Cart"));

const AppLayout = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Make an API call and  send User id and Password and it will authenticate and return data
    data = {
      name: "Shashank Shekhar",
    };
    setUsername(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: username, setUsername }}>
        <div className="app">
          <Header />
          {/* if path is / load Body */}
          <Outlet />
          {/* if path is /about load About */}
          {/* if path is /contact load Contact */}
        </div>
      </UserContext.Provider>
    </Provider>
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
      {
        path: "about",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <About />
          </Suspense>
        ),
      },
      { path: "contact", element: <Contact /> },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
