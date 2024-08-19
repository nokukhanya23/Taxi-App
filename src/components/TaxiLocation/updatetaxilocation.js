import React, { useState } from 'react';
import axios from 'axios';

const TaxiLocation = () => {
  const [taxiId, setTaxiId] = useState('');
  const [location, setLocation] = useState('');

  const handleUpdateLocation = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/update/location', { Taxi_id: taxiId, Location: location });
      alert('Location updated');
    } catch (error) {
      alert('Error: ' + error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleUpdateLocation}>
      <h2>Update Taxi Location</h2>
      <label>
        Taxi ID:
        <input type="text" value={taxiId} onChange={(e) => setTaxiId(e.target.value)} required />
      </label>
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
      </label>
      <button type="submit">Update Location</button>
    </form>
  );
};

export default TaxiLocation;
