import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/TaxiRanks.css';
import { Link, useNavigate } from 'react-router-dom';

const TaxiRanks = () => {
    const [taxiRanks, setTaxiRanks] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTaxiRanks = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/taxiranks`);
                setTaxiRanks(response.data.TaxiRanks);
            } catch (err) {
                setError(err);
                console.error(err);
            }
        };

        fetchTaxiRanks();
    }, []);

    if (error) return <div className="alert alert-danger">Error: {error.message}</div>;

    // Function to delete a taxi rank
    const handleDelete = async (rankId) => {
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}/delete/taxi_rank`, {
                data: { Rank_id: rankId }
            });
            // Remove the deleted rank from the state to update the UI
            setTaxiRanks(taxiRanks.filter(rank => rank.Id !== rankId));
            alert('Taxi rank deleted successfully');
        } catch (error) {
            console.error('Error deleting taxi rank:', error);
            alert('Failed to delete taxi rank');
        }
    };

    return (
        <div className="container">
            <h1 className="text-center my-4">Taxi Ranks</h1>
            <Link to='/add/addtaxirank' className='btn btn-info'>Add Taxi Rank</Link>

            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Rank</th>
                        <th>City</th>
                        <th>Location</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {taxiRanks.map(rank => (
                        <tr key={rank.Id}>
                            <td>{rank.Rank}</td>
                            <td>{rank.City}</td>
                            <td>{rank.Location}</td>
                            <td>
                                <Link to={`/update/taxi_rank/${rank.Id}`} className='btn btn-warning btn-sm'>
                                    <i className='bi bi-pencil'></i>
                                </Link>
                                <button
                                    onClick={() => handleDelete(rank.Id)}
                                    className='btn btn-danger btn-sm ms-2'
                                >
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

export default TaxiRanks;
