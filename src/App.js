import React, { useState } from "react";
import Registration from "./components/Registration";
import Login from "./components/Login";
import CustomerDashboard from "./components/CustomerDashboard";
import RestaurantDashboard from "./components/RestaurantDashboard";

function App() {
  const [user, setUser] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  return (
    <div className="App">
      <h1>Foodie</h1>
      <div className="container">
        <Registration setUser={setUser} />
        <Login setUser={setUser} />
        {user && user.role === "customer" && (
          <CustomerDashboard
            user={user}
            restaurants={restaurants}
            setRestaurants={setRestaurants}
            selectedRestaurant={selectedRestaurant}
            setSelectedRestaurant={setSelectedRestaurant}
          />
        )}
        {user && user.role === "restaurant" && (
          <RestaurantDashboard
            user={user}
            restaurants={restaurants}
            setRestaurants={setRestaurants}
            setSelectedRestaurant={setSelectedRestaurant}
          />
        )}
      </div>
    </div>
  );
}

export default App;

