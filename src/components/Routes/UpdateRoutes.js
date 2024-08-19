import React, { useState } from 'react';
import axios from 'axios';

const UpdateRoute = () => {
  const [id, setId] = useState('');
  const [originId, setOriginId] = useState('');
  const [destinationId, setDestinationId] = useState('');
  const [fare, setFare] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`/routes/${id}`, {
        Origin_Id: originId,
        Destination_Id: destinationId,
        Taxi_Fare: fare,
      });
      alert('Route updated successfully');
    } catch (error) {
      console.error('Error updating route:', error);
    }
  };

  return (
    <div>
      <h2>Update Route</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <label>
          Origin ID:
          <input type="text" value={originId} onChange={(e) => setOriginId(e.target.value)} />
        </label>
        <label>
          Destination ID:
          <input type="text" value={destinationId} onChange={(e) => setDestinationId(e.target.value)} />
        </label>
        <label>
          Fare:
          <input type="text" value={fare} onChange={(e) => setFare(e.target.value)} />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateRoute;
