import React, { useState } from 'react';
import axios from 'axios';

const DeleteCity = () => {
  const [id, setId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.delete(`/cities/${id}`);
      alert('City deleted successfully');
    } catch (error) {
      console.error('Error deleting city:', error);
    }
  };

  return (
    <div>
      <h2>Delete City</h2>
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

export default DeleteCity;
