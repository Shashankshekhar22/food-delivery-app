const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
