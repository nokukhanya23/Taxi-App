import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaxiLocations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('/locations');
        setLocations(response.data.Locations);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };
    fetchLocations();
  }, []);

  return (
    <div>
      <h2>Taxi Locations</h2>
      <ul>
        {locations.map((location) => (
          <li key={location.id}>Taxi ID: {location.Taxi_id}, Location: {location.Location}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaxiLocations;
