import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cities = () => {
  const [cities, setCities] = useState([]);
  const [cityName, setCityName] = useState('');

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get('/cities');
        setCities(response.data.Cities);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };
    fetchCities();
  }, []);

  const handleAddCity = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/add/city', { City_Name: cityName });
      alert('City added');
      // Optionally refetch or update the list
    } catch (error) {
      alert('Error: ' + error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Cities</h2>
      <form onSubmit={handleAddCity}>
        <label>
          City Name:
          <input type="text" value={cityName} onChange={(e) => setCityName(e.target.value)} required />
        </label>
        <button type="submit">Add City</button>
      </form>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>{city.City_Name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cities;
