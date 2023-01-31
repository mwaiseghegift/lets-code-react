import React, { useState, useEffect } from "react";
import RestaurantForm from "./RestaurantForm";

const RestaurantDashboard = ({ user, restaurants, setRestaurants, setSelectedRestaurant }) => {
  const [selectedRestaurant, setSelectedRestaurantState] = useState(null);

  useEffect(() => {
    if (user && user.role === "restaurant") {
      setSelectedRestaurant(restaurants.find(r => r.owner === user.id));
      setSelectedRestaurantState(restaurants.find(r => r.owner === user.id));
    }
  }, [user, restaurants, setSelectedRestaurant]);

  const handleEditRestaurant = restaurant => {
    setSelectedRestaurant(restaurant);
    setSelectedRestaurantState(restaurant);
  };

  const handleSaveRestaurant = restaurant => {
    const index = restaurants.findIndex(r => r.id === restaurant.id);
    const updatedRestaurants = [...restaurants];
    updatedRestaurants[index] = restaurant;
    setRestaurants(updatedRestaurants);
    setSelectedRestaurantState(null);
  };

  return (
    <div className="restaurant-dashboard">
      {selectedRestaurant ? (
        <RestaurantForm
          restaurant={selectedRestaurant}
          onSave={handleSaveRestaurant}
        />
      ) : (
        <div>
          <h2>Restaurant Dashboard</h2>
          <p>Welcome {user.name}!</p>
          <p>Your Email: {user.email}</p>
          <p>Your Balance: {user.balance}</p>
          <h3>Your Restaurants</h3>
          <div className="restaurants">
            {restaurants
              .filter(r => r.owner === user.id)
              .map(restaurant => (
                <div
                  className="restaurant"
                  key={restaurant.id}
                  onClick={() => handleEditRestaurant(restaurant)}
                >
                  <h4>{restaurant.name}</h4>
                  <p>{restaurant.address}</p>
                  <p>{restaurant.cuisine}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantDashboard;
