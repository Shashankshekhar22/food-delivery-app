import RestaurantCard, { withPromotedLabel } from "../components/ResturantCard";
import { swiggyMockData } from "../utils/swiggyMockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const resData = swiggyMockData;

const Body = () => {
  // State Variable - Super powerful Variable
  const [resListData, setResListData] = useState([
    // ...resData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants,
  ]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const { loggedInUser, setUsername } = useContext(UserContext);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.944372629805278&lng=77.67966147512197&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log("jsonData", jsonData);
    setResListData(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilteredRestaurant(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onLineStatus = useOnlineStatus();
  if (!onLineStatus) {
    return <h1>Seems you are offline. Please Check your Internet Status</h1>;
  }

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  // Normal JS variable
  //   let resListData =
  //     resData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
  return resListData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="w-60 p-2 border-solid border-black hover:border-gray-400"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyUp={(e) => {
              const filteredList = resListData.filter((restaurantData) => {
                return restaurantData.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(filteredList);
              if (e.target.value === "") {
                setFilteredRestaurant(resListData);
              }
            }}
          ></input>
        </div>
        <button
          className="flex px-8 m-7 py-1 items-center text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          onClick={() => {
            const filteredList = resListData.filter((restaurantData) => {
              return restaurantData.info.avgRating > 4;
            });
            setResListData(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="flex m-4 p-4">
        <label>User Name: </label>
        <input
          type="text"
          className="w-60 p-2 border-solid border-black hover:border-gray-400"
          placeholder="User Name"
          value={loggedInUser}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </div>

      <div className="restaurant-container flex flex-wrap">
        {filteredRestaurant.map((restaurantData) =>
          restaurantData.info.veg ? (
            <RestaurantCardPromoted
              resData={restaurantData.info}
              key={restaurantData.info.id}
            />
          ) : (
            <RestaurantCard
              resData={restaurantData.info}
              key={restaurantData.info.id}
            />
          )
        )}
        ;
      </div>
    </div>
  );
};

export default Body;
