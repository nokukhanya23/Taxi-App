import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaxiTypes = () => {
  const [taxiTypes, setTaxiTypes] = useState([]);

  useEffect(() => {
    const fetchTaxiTypes = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/taxiTypes`);
        setTaxiTypes(response.data.TaxiTypes);
      } catch (error) {
        console.error('Error fetching taxi types:', error);
      }
    };
    fetchTaxiTypes();
  }, []);

  return (

    <div className="container">
      <h1 className="text-center my-4">Taxi Types</h1>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Seats</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {taxiTypes.map((type) => (
            <tr key={type.id}>
              <td>{type.Brand}</td>
              <td>{type.Model}</td>
              <td>{type.Seats}</td>
              <td>
                <button className='btn btn-warning btn-sm'>
                  <i className='bi bi-pencil'></i>
                </button>
                <button className='btn btn-danger btn-sm ms-2'>
                  <i className='bi bi-trash'></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaxiTypes;
