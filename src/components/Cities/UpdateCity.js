import React, { useState } from 'react';
import axios from 'axios';

const UpdateCity = () => {
  const [id, setId] = useState('');
  const [cityName, setCityName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`/cities/${id}`, {
        City_Name: cityName,
      });
      alert('City updated successfully');
    } catch (error) {
      console.error('Error updating city:', error);
    }
  };

  return (
    <div>
      <h2>Update City</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <label>
          City Name:
          <input type="text" value={cityName} onChange={(e) => setCityName(e.target.value)} />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateCity;
