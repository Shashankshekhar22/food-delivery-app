import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="m-4 p-4 w-[250px] bg-slate-300 rounded-lg">
      <Link to={"/restaurants/" + resData.id} className="restaurant-route">
        <img
          className="rounded-lg"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resData.cloudinaryImageId
          }
        ></img>
        <h3 className="font-bold text-lg py-4">{resData.name}</h3>
        <h4 className="font-bold text-sm">{resData.cuisines.join(", ")}</h4>
        <h4 className="font-bold text-sm">{resData.avgRating}</h4>
        <h4 className="font-bold text-sm">{resData.sla.slaString}</h4>
        <h4 className="font-bold text-sm">{resData.costForTwo}</h4>
      </Link>
    </div>
  );
};

export default RestaurantCard;
