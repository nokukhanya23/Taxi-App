import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Taxis = () => {
  const [taxis, setTaxis] = useState([]);
  const [typeId, setTypeId] = useState('');
  const [regNumber, setRegNumber] = useState('');

  useEffect(() => {
    const fetchTaxis = async () => {
      try {
        const response = await axios.get('/taxis');
        setTaxis(response.data.Taxis);
      } catch (error) {
        console.error('Error fetching taxis:', error);
      }
    };
    fetchTaxis();
  }, []);

  const handleAddTaxi = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/add/taxi', { Type_id: typeId, Reg_Number: regNumber });
      alert('Taxi added');
      // Optionally refetch or update the list
    } catch (error) {
      alert('Error: ' + error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Taxis</h2>
      <form onSubmit={handleAddTaxi}>
        <label>
          Type ID:
          <input type="text" value={typeId} onChange={(e) => setTypeId(e.target.value)} required />
        </label>
        <label>
          Registration Number:
          <input type="text" value={regNumber} onChange={(e) => setRegNumber(e.target.value)} required />
        </label>
        <button type="submit">Add Taxi</button>
      </form>
      <ul>
        {taxis.map((taxi) => (
          <li key={taxi.id}>Type ID: {taxi.Type_id}, Reg Number: {taxi.Reg_Number}</li>
        ))}
      </ul>
    </div>
  );
};

export default Taxis;
