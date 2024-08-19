import React, { useState } from 'react';
import axios from 'axios';

const UpdateTaxi = () => {
  const [id, setId] = useState('');
  const [typeId, setTypeId] = useState('');
  const [regNumber, setRegNumber] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`/taxis/${id}`, {
        Type_id: typeId,
        Reg_Number: regNumber,
      });
      alert('Taxi updated successfully');
    } catch (error) {
      console.error('Error updating taxi:', error);
    }
  };

  return (
    <div>
      <h2>Update Taxi</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <label>
          Type ID:
          <input type="text" value={typeId} onChange={(e) => setTypeId(e.target.value)} />
        </label>
        <label>
          Reg Number:
          <input type="text" value={regNumber} onChange={(e) => setRegNumber(e.target.value)} />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateTaxi;
