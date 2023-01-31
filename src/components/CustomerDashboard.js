import React, { useState } from 'react';

const CustomerDashboard = () => {
  const [customerData, setCustomerData] = useState({});

  return (
    <div>
      <h2>Customer Dashboard</h2>
      <p>Welcome {customerData.name}!</p>
      <p>Your Email: {customerData.email}</p>
      <p>Your Balance: {customerData.balance}</p>
    </div>
  );
};

export default CustomerDashboard;
