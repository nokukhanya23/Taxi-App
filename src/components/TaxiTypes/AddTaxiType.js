import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaxiTypes = () => {
  const [taxiTypes, setTaxiTypes] = useState([]);
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [seats, setSeats] = useState('');

  useEffect(() => {
    const fetchTaxiTypes = async () => {
      try {
        const response = await axios.get('/taxiTypes');
        setTaxiTypes(response.data.TaxiTypes);
      } catch (error) {
        console.error('Error fetching taxi types:', error);
      }
    };
    fetchTaxiTypes();
  }, []);

  const handleAddTaxiType = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/add/taxi_type', { Brand: brand, Model: model, Seats: seats });
      alert('Taxi type added');
      // Optionally refetch or update the list
    } catch (error) {
      alert('Error: ' + error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Taxi Types</h2>
      <form onSubmit={handleAddTaxiType}>
        <label>
          Brand:
          <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} required />
        </label>
        <label>
          Model:
          <input type="text" value={model} onChange={(e) => setModel(e.target.value)} required />
        </label>
        <label>
          Seats:
          <input type="number" value={seats} onChange={(e) => setSeats(e.target.value)} required />
        </label>
        <button type="submit">Add Taxi Type</button>
      </form>
      <ul>
        {taxiTypes.map((type) => (
          <li key={type.id}>{type.Brand} {type.Model} ({type.Seats} seats)</li>
        ))}
      </ul>
    </div>
  );
};

export default TaxiTypes;
