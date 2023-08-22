import RestaurantCard from "../components/ResturantCard";
import { swiggyMockData } from "../utils/swiggyMockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const resData = swiggyMockData;

const Body = () => {
  // State Variable - Super powerful Variable
  const [resListData, setResListData] = useState([
    // ...resData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants,
  ]);

  useEffect(() => {
    fetchData();
    console.log("use effect called");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.60858570026177&lng=85.11201202869415&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log("jsonData", jsonData);
    setResListData(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  // Normal JS variable
  //   let resListData =
  //     resData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
  return resListData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resListData.filter((restaurantData) => {
              return restaurantData.info.avgRating > 4;
            });
            setResListData(filteredList);

            console.log(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {resListData.map((restaurantData) => (
          <RestaurantCard
            key={restaurantData.info.id}
            resData={restaurantData.info}
          />
        ))}
        ;
      </div>
    </div>
  );
};

export default Body;
