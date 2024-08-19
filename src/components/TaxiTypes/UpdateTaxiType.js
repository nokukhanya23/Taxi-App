import React, { useState } from 'react';
import axios from 'axios';

const UpdateTaxiType = () => {
  const [id, setId] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [seats, setSeats] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`/taxiTypes/${id}`, {
        Brand: brand,
        Model: model,
        Seats: seats,
      });
      alert('Taxi type updated successfully');
    } catch (error) {
      console.error('Error updating taxi type:', error);
    }
  };

  return (
    <div>
      <h2>Update Taxi Type</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <label>
          Brand:
          <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
        </label>
        <label>
          Model:
          <input type="text" value={model} onChange={(e) => setModel(e.target.value)} />
        </label>
        <label>
          Seats:
          <input type="text" value={seats} onChange={(e) => setSeats(e.target.value)} />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateTaxiType;
