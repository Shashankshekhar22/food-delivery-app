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

const jsxHeading = <h1 id="heading">This is my React Element 🚀 </h1>;

const Title = () => {
  return <h1 className="titleComponent">This is the Title Component</h1>;
};
// React Component
// Component composition: Clubbing of 2 or more componnet together
const HeadingComponent = () => {
  return (
    <div className="container">
      {jsxHeading}
      <h3>Called as a function: </h3> {Title()}
      <Title />
      <h1 className="heading">This is a react Functional Component</h1>
    </div>
  );
};
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
// root.render(jsxHeading);
root.render(<HeadingComponent />);
