import React, { useState } from 'react';

const RestaurantForm = () => {
  const [restaurantDetails, setRestaurantDetails] = useState({
    name: '',
    address: '',
    cuisine: '',
  });

  const handleChange = (e) => {
    setRestaurantDetails({
      ...restaurantDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit the form data to your API or database
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Restaurant Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={restaurantDetails.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          name="address"
          id="address"
          value={restaurantDetails.address}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="cuisine">Cuisine:</label>
        <input
          type="text"
          name="cuisine"
          id="cuisine"
          value={restaurantDetails.cuisine}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RestaurantForm;
