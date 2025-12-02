import { RESTAURANT_IMAGE_URL } from "../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  deliveryTime,
  costForTwo,
  avgRating,
}) => {
  return (
    <div className="card-container">
      <img
        className="res-logo"
        src={RESTAURANT_IMAGE_URL + cloudinaryImageId}
        alt="food-image"
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{area}</h5>
      <h5>{avgRating} stars</h5>
      <h5>₹{costForTwo / 100} FOR TWO</h5>
      <h5>{deliveryTime} minutes</h5>
    </div>
  );
};

export default RestaurantCard;
