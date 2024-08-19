import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cities = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/cities`);
        setCities(response.data.Cities);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };
    fetchCities();
  }, []);

  return (
    <div>
      <h2>Cities</h2>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>{city.City_Name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cities;
