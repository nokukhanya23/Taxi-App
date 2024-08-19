import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import Cities from '../Cities/Cities';


function RouteTabs() {
  return (
    <div className="container mt-4">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="taxi-tab"
            data-bs-toggle="tab"
            data-bs-target="#taxi"
            type="button"
            role="tab"
            aria-controls="taxi"
            aria-selected="true"
          >
            Routes
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="taxi-type-tab"
            data-bs-toggle="tab"
            data-bs-target="#taxi-type"
            type="button"
            role="tab"
            aria-controls="taxi-type"
            aria-selected="false"
          >
            Cities
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="taxi"
          role="tabpanel"
          aria-labelledby="taxi-tab"
        >
          {/* Taxi Content */}
          <div className="mt-3">
            
            <Routes />
            
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="taxi-type"
          role="tabpanel"
          aria-labelledby="taxi-type-tab"
        >
          {/* Taxi Type Content */}
          <div className="mt-3">
            
            <Cities />

          </div>
        </div>
      </div>
    </div>
  );
}

export default RouteTabs;
