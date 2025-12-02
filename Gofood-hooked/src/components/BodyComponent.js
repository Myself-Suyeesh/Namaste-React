import { useState } from "react";
import { restaurantList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const BodyComponent = () => {
  const [resList, setResList] = useState(restaurantList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (item) => item.data.avgRating > 4
            );
            setResList(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {resList.map((listItem) => {
          return <RestaurantCard key={listItem.data.id} {...listItem.data} />;
        })}
      </div>
    </div>
  );
};

export default BodyComponent;
