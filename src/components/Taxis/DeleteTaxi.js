import React, { useState } from 'react';
import axios from 'axios';

const DeleteTaxi = () => {
  const [id, setId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.delete(`/taxis/${id}`);
      alert('Taxi deleted successfully');
    } catch (error) {
      console.error('Error deleting taxi:', error);
    }
  };

  return (
    <div>
      <h2>Delete Taxi</h2>
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

export default DeleteTaxi;
