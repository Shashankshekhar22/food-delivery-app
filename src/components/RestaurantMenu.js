import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { menuApiURL } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(menuApiURL + resId);
  //   const jsonData = await data.json();
  //   console.log(jsonData);
  //   setResInfo(jsonData.data);
  // };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const menuItem =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card.card
      .itemCards;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      <ul>
        {menuItem.map((menuList) => {
          return (
            <li key={menuList.card.info.id}>
              {menuList.card.info.name} -{" Rs "}
              {menuList.card.info.price / 100 ||
                menuList.card.info.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
