import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Taxis = () => {
  const [taxis, setTaxis] = useState([]);

  useEffect(() => {
    const fetchTaxis = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/taxis`);
        setTaxis(response.data.Taxis);
      } catch (error) {
        console.error('Error fetching taxis:', error);
      }
    };
    fetchTaxis();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">Taxis</h1>
      <button className='btn btn-info'>Add Taxi</button>

      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Reg Number</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody>
          {taxis.map((taxi) => (
            <tr key={taxi.id}>
              <td>{taxi.Reg_Number}</td>
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

export default Taxis;
