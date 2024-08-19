import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const UpdateTaxiRank = () => {
  const [rank, setRank] = useState('');
  const [city, setCity] = useState('');
  const [location, setLocation] = useState('');
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate(); // For navigation after successful update

  useEffect(() => {
    const fetchTaxiRank = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/taxiranks/${id}`);
        const { Rank, City, Location } = response.data;
        setRank(Rank);
        setCity(City);
        setLocation(Location);
      } catch (error) {
        console.error('Error fetching taxi rank:', error);
      }
    };

    fetchTaxiRank();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/update/taxi_rank`, {
        Rank_id: id,
        Rank: rank,
        City: city,
        Location: location
      });
      alert('Taxi rank updated successfully');
      navigate('/taxiranks'); // Redirect to the taxi ranks page
    } catch (error) {
      console.error('Error updating taxi rank:', error);
      alert('Failed to update taxi rank');
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center mb-4">Update Taxi Rank</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="rank" className="form-label">Rank:</label>
              <input
                id="rank"
                type="text"
                className="form-control"
                value={rank}
                onChange={(e) => setRank(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">City:</label>
              <input
                id="city"
                type="text"
                className="form-control"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">Location:</label>
              <input
                id="location"
                type="text"
                className="form-control"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
            <button className="btn btn-success w-100" type="submit">Update Taxi Rank</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateTaxiRank;
