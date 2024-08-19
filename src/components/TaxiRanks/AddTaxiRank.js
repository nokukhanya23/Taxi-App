import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const AddTaxiRanks = () => {
  const [taxiRanks, setTaxiRanks] = useState([]);
  const [rank, setRank] = useState('');
  const [city, setCity] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTaxiRanks = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/taxiranks`);
        setTaxiRanks(response.data.TaxiRanks);
      } catch (error) {
        console.error('Error fetching taxi ranks:', error);
      }
    };
    fetchTaxiRanks();
  }, []);

  const handleAddTaxiRank = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/add/taxi_rank`, { Rank: rank, City: city, Location: location });
      alert('Taxi rank added');
      navigate('/taxiranks');
    } catch (error) {
      alert('Error: ' + error.response.data.error);
    }
  };

  return (
    <div className='container justify-content-center' >
      <div className='col-md-12'>
        <h2 className='text-center mb-4'>Add Taxi Rank</h2>
        <form onSubmit={handleAddTaxiRank}>
          <div className='mb-3'>
            <label htmlFor='rank' className='form-label'>Rank:</label>
            <input
              id='rank'
              type='text'
              className='form-control'
              value={rank}
              onChange={(e) => setRank(e.target.value)}
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='city' className='form-label'>City:</label>
            <input
              id='city'
              type='text'
              className='form-control'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='location' className='form-label'>Location:</label>
            <input
              id='location'
              type='text'
              className='form-control'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <button className='btn btn-success w-100' type='submit'>Add Taxi Rank</button>
        </form>
      </div>
    </div>
  );
};

export default AddTaxiRanks;
