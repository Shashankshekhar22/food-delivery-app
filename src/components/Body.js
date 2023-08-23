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

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

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

  // Normal JS variable
  //   let resListData =
  //     resData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
  return resListData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-btn"
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
                console.log(resListData);
                setFilteredRestaurant(resListData);
              }
            }}
          ></input>
          {/* <button
            onClick={() => {
              console.log(searchText);
              const filteredList = resListData.filter((restaurantData) => {
                return restaurantData.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(filteredList);

              console.log(filteredList);
            }}
          >
            Search
          </button> */}
        </div>
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
        {filteredRestaurant.map((restaurantData) => (
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
