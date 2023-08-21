import RestaurantCard from "../components/ResturantCard";
import { swiggyMockData } from "../utils/swiggyMockData";

const resData = swiggyMockData;

const Body = () => {
  const resListData =
    resData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resturant-container">
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
