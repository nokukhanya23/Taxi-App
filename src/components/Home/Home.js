
// import React, { useEffect, useState } from 'react';
// // import Button from 'react-bootstrap/Button';
// import { Button } from 'react-bootstrap';
// import axios from 'axios';


// // import './Home.css';

// const Home = () => {

//     const [message, setMessage] = useState('');

//   useEffect(() => {
//       const fetchMessage = async () => {
//         try {
//           const res = await axios.get(`${process.env.REACT_APP_API_URL}home`);
//           setMessage(res.data.message);
//         } catch (err) {
//           console.error(err);
//           alert('Error fetching message');
//         }
//       };
      
//       fetchMessage();
      
//       const script = document.createElement('script');
//       script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBiQe-Maj5_1OiVU7FCFjIqq3YbvRWC_no&callback=initMap";
//       script.async = true;
//       script.defer = true;
//       document.body.appendChild(script);

//       //after loging in
  

      

// //map style
//       window.initMap = () => {
//           const map = new window.google.maps.Map(document.getElementById('map'), {
//               center: { lat: -26.198765903295303, lng: 28.047865060521648 },
//               zoom: 8
//           });

//           document.getElementById('search').addEventListener('click', () => {
//               const address = document.getElementById('address').value;
//               fetch(`/geocode?address=${address}`)
//                   .then(response => response.json())
//                   .then(data => {
//                       const location = data.results[0].geometry.location;
//                       map.setCenter(location);
//                       new window.google.maps.Marker({
//                           position: location,
//                           map: map
//                       });
//                   });
//           });
//       };

//       return () => {
//           document.body.removeChild(script);
//       };
//   }, []);

//   return (
//       <div className='container'>
//           <h1>My Map</h1>
//                 <h2>Home</h2>
//                 <p>{message}</p>
//               <input className='mb-3' id="address" type="text" placeholder="Uyaphi..?" />
//               <input className='mb-3' id="address" type="text" placeholder="From...?" />
//               <button variant="info" id="search">Search</button>{' '}
//           <div id="map" style={{ height: '500px', width: '100%' }}></div>
//       </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const Home = () => {
  const [message, setMessage] = useState('');
  const [map, setMap] = useState(null); // State to store the map instance

  // Function to fetch message from the server
  const fetchMessage = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/home`);
      setMessage(res.data.message);
    } catch (err) {
      console.error(err);
      alert('Error fetching message');
    }
  };

  // Function to fetch routes based on origin and destination
  const fetchRoutes = async (origin, destination) => {
    try {
      // Encode the parameters to handle spaces and special characters
      const encodedOrigin = encodeURIComponent(origin);
      const encodedDestination = encodeURIComponent(destination);
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/routesOriginDestination`, {
        params: { origin: encodedOrigin, destination: encodedDestination }
      });
      const routes = response.data.routes;
    console.log(routes)

    //   if (routes.length > 0) {
    //     const firstRoute = routes[0]; // Assuming routes have locations you can map
    //     const location = { lat: firstRoute.lat, lng: firstRoute.lng };
    //     if (map) {
    //       map.setCenter(location);
    //       new window.google.maps.Marker({
    //         position: location,
    //         map: map
    //       });
    //     }
    //   } else {
    //     alert('No routes found');
    //   }
    } catch (error) {
      console.error('Error getting routes:', error);
      alert('Failed to get routes');
    }
  };

  // useEffect hook to load the Google Maps script and initialize the map
  useEffect(() => {
    fetchMessage();

    const script = document.createElement('script');
    // script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBiQe-Maj5_1OiVU7FCFjIqq3YbvRWC_no&callback=initMap";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    //Initialize the map when the script loads
    window.initMap = () => {
      const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -26.198765903295303, lng: 28.047865060521648 },
        zoom: 8
      });
      setMap(mapInstance);

      // Add event listener to search button
      document.getElementById('search').addEventListener('click', () => {
        const origin = document.getElementById('origin').value;
        const destination = document.getElementById('destination').value;
        fetchRoutes(origin, destination);
      });
     };

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, [map]); // Dependency array includes map to update if necessary

  return (
    <div className='container'>
      <h2>Home</h2>
      
      <input className='mb-3' id="origin" type="text" placeholder="From...?" />
      <input className='mb-3' id="destination" type="text" placeholder="Enter Destination..?" />
      <Button variant="info" id="search">Search</Button>
      <div id="map" style={{ height: '500px', width: '100%' }}></div>
    </div>
  );
};

export default Home;
