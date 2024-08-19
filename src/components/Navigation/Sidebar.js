// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Navigation/Styles/Sidebar.css'; // Optional: for custom styling

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <span className="navbar-brand">My Application</span>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar bg-primary ${isOpen ? 'active' : ''}`}>
        <ul className="list-unstyled">
          {/* <li><Link to="/cities" className="text-white">Cities</Link></li> */}
          <li><Link to="/routes" className="text-white">Routes</Link></li>
          <li><Link to="/taxis" className="text-white">Taxis</Link></li>
          <li><Link to="/taxitypes" className="text-white">Taxi Types</Link></li>
          {/* <li><Link to="/taxilocation" className="text-white">Taxi Location</Link></li> */}
          <li><Link to="/taxiranks" className="text-white">Taxi Ranks</Link></li>
        </ul>
      </div>
    </>
  );
}

export  default Sidebar;