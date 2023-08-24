import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <Link to={"/restaurants/" + resData.id} className="restaurant-route">
        <img
          className="res-logo"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resData.cloudinaryImageId
          }
        ></img>
        <h3>{resData.name}</h3>
        <h4>{resData.cuisines.join(", ")}</h4>
        <h4>{resData.avgRating}</h4>
        <h4>{resData.sla.slaString}</h4>
        <h4>{resData.costForTwo}</h4>
      </Link>
    </div>
  );
};

export default RestaurantCard;
