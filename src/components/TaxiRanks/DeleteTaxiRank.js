import React, { useState } from 'react';
import axios from 'axios';

const DeleteTaxiRank = () => {
  const [id, setId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.delete(`/api/taxiranks/${id}`);
      alert('Taxi rank deleted successfully');
    } catch (error) {
      console.error('Error deleting taxi rank:', error);
    }
  };
 
  return (
    <div>
      <h2>Delete Taxi Rank</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default DeleteTaxiRank;
