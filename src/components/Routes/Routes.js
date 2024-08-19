import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Routes = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/routes`);
        setRoutes(response.data.TaxiRoutes);
      } catch (error) {
        console.error('Error fetching routes:', error);
      }
    };
    fetchRoutes();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">Routes</h1>
      <Link to={`/add/route`} className='btn btn-info'>Add Route</Link>
      <table className="table table-striped table-bordered my-2">
        <thead className="thead-dark">
          <tr>
            <th>From</th>
            <th>Destination</th>
            <th>Taxi_Fare</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody>
          {routes.map((route) => (
            <tr key={route.Id}>
              <td>{route.Origin_Id}</td>
              <td>{route.Destination_Id}</td>
              <td>{route.Taxi_Fare}</td>
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

export default Routes;
