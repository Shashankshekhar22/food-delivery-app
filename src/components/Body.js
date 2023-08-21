import RestaurantCard from "../components/ResturantCard";
import { swiggyMockData } from "../utils/swiggyMockData";
import { useState } from "react";

const resData = swiggyMockData;

const Body = () => {
  // State Variable - Super powerful Variable
  const [resListData, setResListData] = useState([
    ...resData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants,
  ]);
  // Normal JS variable
  //   let resListData =
  //     resData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
  return (
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
