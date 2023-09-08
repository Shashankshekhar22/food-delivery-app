import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const menuItem =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card.card
      .itemCards;
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (categoriesData) =>
        // type.googleapis.com/swiggy.presentation.food.v2.ItemCategory
        categoriesData.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-xl">{name}</h1>
      <p className="font-bold">{cuisines.join(", ")}</p>
      {categories.map((category, index) => {
        return (
          // controlled component since child is parent is controlling it
          <RestaurantCategories
            data={category.card.card}
            key={category.card.card.title}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}
      {/* <ul>
        {menuItem.map((menuList) => {
          return (
            <li key={menuList.card.info.id}>
              {menuList.card.info.name} -{" Rs "}
              {menuList.card.info.price / 100 ||
                menuList.card.info.defaultPrice / 100}
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
