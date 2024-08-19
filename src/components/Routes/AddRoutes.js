import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Routes = () => {
  const [routes, setRoutes] = useState([]);
  const [originId, setOriginId] = useState('');
  const [destinationId, setDestinationId] = useState('');
  const [fare, setFare] = useState('');

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}add/route`);
        setRoutes(response.data.TaxiRoutes);
      } catch (error) {
        console.error('Error fetching routes:', error);
      }
    };
    fetchRoutes();
  }, []);

  const handleAddRoute = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/add/route', { Origin_Id: originId, Destination_id: destinationId, Taxi_Fare: fare });
      alert('Route added');
      // Optionally refetch or update the list
    } catch (error) {
      alert('Error: ' + error.response.data.error);
    }
  };

  return (
    <div className='container'>
      <h2>Add Routes</h2>
      <div>
        <form onSubmit={handleAddRoute}>
          <label>
            Origin ID:
            <input type="text" value={originId} onChange={(e) => setOriginId(e.target.value)} required />
          </label>
          <label>
            Destination ID:
            <input type="text" value={destinationId} onChange={(e) => setDestinationId(e.target.value)} required />
          </label>
          <label>
            Fare:
            <input type="number" value={fare} onChange={(e) => setFare(e.target.value)} required />
          </label>
          <button type="submit">Add Route</button>
        </form>
      </div>
      
      <ul>
        {routes.map((route) => (
          <li key={route.id}>Origin ID: {route.Origin_Id}, Destination ID: {route.Destination_Id}, Fare: {route.Taxi_Fare}</li>
        ))}
      </ul>
    </div>
  );
};

export default Routes;
