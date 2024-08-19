import React, { useState } from 'react';
import axios from 'axios';

const DeleteRoute = () => {
  const [id, setId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.delete(`/routes/${id}`);
      alert('Route deleted successfully');
    } catch (error) {
      console.error('Error deleting route:', error);
    }
  };

  return (
    <div>
      <h2>Delete Route</h2>
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

export default DeleteRoute;
