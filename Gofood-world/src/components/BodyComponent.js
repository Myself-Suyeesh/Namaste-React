import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";

const BodyComponent = () => {
  const [resList, setResList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9352403&lng=77.624532&carousel=true&third_party_vendor=1"
    );
    const resData = await data.json();
    setResList(
      resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (resList.length === 0) {
    return <ShimmerUI />;
  }

  return (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="Input-box"
          value={searchFilter}
          onChange={(event) => {
            setSearchFilter(event.target.value);
          }}
        />
        <button
          className="Search-btn"
          onClick={() => {
            const filteredSearch = resList.filter((resItem) =>
              resItem?.info?.name
                .toLowerCase()
                .includes(searchFilter.toLowerCase())
            );
            setFilteredRestaurant(filteredSearch);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (item) => item.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurant.map((listItem) => {
          return <RestaurantCard key={listItem.info.id} {...listItem.info} />;
        })}
      </div>
    </div>
  );
};

export default BodyComponent;
