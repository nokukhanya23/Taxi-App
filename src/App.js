// // src/App.js
import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';


import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';
import Home from './components/Home/Home';
// import Sidebar from './components/Navigation/Sidebar';
// import NavBar from './components/Navigation/Navbar';
//Taxis
import AddTaxi from './components/Taxis/AddTaxi';
import Taxis from './components/Taxis/Taxis';
import UpdateTaxi from './components/Taxis/UpdateTaxi';
import DeleteTaxi from './components/Taxis/DeleteTaxi';
import TaxiTabs from './components/Taxis/TaxiTabs';


//Taxiranks
import AddTaxiRank from './components/TaxiRanks/AddTaxiRank';
import TaxiRanks from './components/TaxiRanks/TaxiRanks';
import UpdateTaxiRank from './components/TaxiRanks/UpdateTaxiRank';
import DeleteTaxiRank from './components/TaxiRanks/DeleteTaxiRank';

//TaxiTypes
import AddTaxiType from './components/TaxiTypes/AddTaxiType';
import TaxiTypes from './components/TaxiTypes/TaxiTypes';
import UpdateTaxiType from './components/TaxiTypes/UpdateTaxiType';
import DeleteTaxiType from './components/TaxiTypes/DeleteTaxiType';

//Cities
import AddCity from './components/Cities/AddCity';
import Cities from './components/Cities/Cities';
import UpdateCity from './components/Cities/UpdateCity';
import DeleteCity from './components/Cities/DeleteCity';

//Routes
import AddRoutes from './components/Routes/AddRoutes';
import AllRoutes from './components/Routes/Routes';
import UpdateRoutes from './components/Routes/UpdateRoutes';
import DeleteRoutes from './components/Routes/DeleteRoutes';
import RouteTabs from './components/Routes/RouteTabs';

// ManageTaxis
// import ManageTaxis from './components/ManageTaxis/ManageTaxis';

// Taxi Locations
// import UpdateTaxiLocation from './components/updatetaxilocation';
// import TaxiLocation from './components/taxilocation';
// import DeleteTaxiLocation from './components/deletetaxilocation';

// function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };
//   return (
//     <div className="d-flex">
//       {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <Link className="navbar-brand" to="/">My App</Link>
//         </div>
//       </nav> */}
//       <div>

//       </div>

//       <div className="d-flex">
//       <NavBar />

//         <div className={`sidebar bg-primary ${sidebarOpen ? 'd-block' : 'd-none d-lg-block'}`}>
          
//           <ul className="nav flex-column">
//             <li className="nav-item">
//               <Link className="nav-link text-white" to="/cities">Cities</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link text-white" to="/routes">Routes</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link text-white" to="/taxis">Taxis</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link text-white" to="/taxitypes">Taxi Types</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link text-white" to="/taxilocation">Taxi Locations</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link text-white" to="/taxiranks">Taxi Ranks</Link>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <Sidebar />
      
      
//       <div className="flex-grow-1 p-3">

//       {/* <div style={{ marginLeft: '250px', padding: '15px' }}> */}

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
        

//         <Route path="/add/city" element={<AddCity />} />
//         <Route path="/cities" element={<Cities />} />
//         <Route path="/delete/city" element={<DeleteCity />} />
//         <Route path="/update/city" element={<UpdateCity />} />

//         <Route path="/add/addroutes" element={<AddRoutes />} />
//         <Route path="/routes" element={<AllRoutes />} />
//         <Route path="/update/route" element={<UpdateRoutes />} />
//         <Route path="/delete/route" element={<DeleteRoutes />} />

//         <Route path="/add/taxi" element={<AddTaxi />} />
//         <Route path="/taxis" element={<Taxis />} />
//         <Route path="/update/taxi" element={<UpdateTaxi />} />
//         <Route path="/delete/taxi" element={<DeleteTaxi />} />

//         <Route path="/add/taxitype" element={<AddTaxiType />} />
//         <Route path="/taxitypes" element={<TaxiTypes />} />
//         <Route path="/delete/taxitype" element={<DeleteTaxiType />} />
//         <Route path="/update/taxitype" element={<UpdateTaxiType />} />

//         {/* <Route path="/update/taxilocation" element={<UpdateTaxiLocation />} /> */}
//         {/* <Route path="/taxilocation" element={<TaxiLocation />} /> */}
//         {/* <Route path="/delete/taxilocation" element={<DeleteTaxiLocation />} /> */}

//         <Route path="/taxiranks" element={<TaxiRanks />} />
//         <Route path="/add/addtaxirank" element={<AddTaxiRank />} />
//         <Route path="/update/taxirank" element={<UpdateTaxiRank />} />
//         <Route path="/delete/taxirank" element={<DeleteTaxiRank />} />
//       </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Route, Routes, Link } from 'react-router-dom';
// import Home from './components/home';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import Cities from './components/cities';
// import RoutesList from './components/routes';
// import Taxis from './components/taxis';
// import TaxiTypes from './components/taxitypes';
// import TaxiLocation from './components/taxilocation';
// import TaxiRanks from './components/taxiranks';

// Navbar Component
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className='container'>
          <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
          <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">Taxi App</a>
          <div className="collapse navbar-collapse d-none d-lg-block">
            <ul className="navbar-nav ml-auto">
              {/* <li className="nav-item"><Link to="/cities" className="nav-link">Cities</Link></li> */}
              <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
              <li className="nav-item"><Link to="/routetabs" className="nav-link">Routes</Link></li>
              <li className="nav-item"><Link to="/taxitabs" className="nav-link">Taxis</Link></li>
              {/* <li className="nav-item"><Link to="/taxitypes" className="nav-link">Taxi Types</Link></li> */}
              <li className="nav-item"><Link to="/taxiranks" className="nav-link">Taxi Ranks</Link></li>
              {/* <li className="nav-item"><Link to="/taxilocation" className="nav-link">Taxi Location</Link></li> */}

            </ul>
          </div>
      </div>
      
    </nav>
  );
};


// Sidebar Component
function Sidebar({ sidebarOpen }) {
  return (
    <div className={`sidebar bg-primary ${sidebarOpen ? 'd-block' : 'd-none d-lg-block'} `}>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/routetabs">Routes</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/taxitabs">Taxis</Link>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link text-white" to="/taxitypes">Taxi Types</Link> */}
        </li>
        
        <li className="nav-item">
          <Link className="nav-link text-white" to="/taxiranks">Taxi Ranks</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link text-white" to="/taxilocation">Taxi Locations</Link>
        </li> */}
      </ul>
    </div>
  );
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  return (
    <div className="App">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className='container'>
        <div className="d-flex">

          {/* call the side bar */}
        <Sidebar sidebarOpen={sidebarOpen} />

        <div className="content p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
        

            <Route path="/add/city" element={<AddCity />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/delete/city" element={<DeleteCity />} />
            <Route path="/update/city" element={<UpdateCity />} />

            <Route path="/add/route" element={<AddRoutes />} />
            <Route path="/routes" element={<AllRoutes />} />
            <Route path="/update/route" element={<UpdateRoutes />} />
            <Route path="/delete/route" element={<DeleteRoutes />} />
            <Route path="/routetabs" element={<RouteTabs />} />


            <Route path="/add/taxi" element={<AddTaxi />} />
            <Route path="/taxis" element={<Taxis />} />
            <Route path="/update/taxi" element={<UpdateTaxi />} />
            <Route path="/delete/taxi" element={<DeleteTaxi />} />
            <Route path="/taxitabs" element={<TaxiTabs />} />


            <Route path="/add/taxitype" element={<AddTaxiType />} />
            <Route path="/taxitypes" element={<TaxiTypes />} />
            <Route path="/delete/taxitype" element={<DeleteTaxiType />} />
            <Route path="/update/taxitype" element={<UpdateTaxiType />} />

            {/* <Route path="/update/taxilocation" element={<UpdateTaxiLocation />} /> */}
            {/* <Route path="/taxilocation" element={<TaxiLocation />} /> */}
            {/* <Route path="/delete/taxilocation" element={<DeleteTaxiLocation />} /> */}

            <Route path="/taxiranks" element={<TaxiRanks />} />
            <Route path="/add/addtaxirank" element={<AddTaxiRank />} />
            <Route path="/update/taxi_rank/:id" element={<UpdateTaxiRank />} />
            <Route path="/delete/taxirank/:id" element={<DeleteTaxiRank />} />
          </Routes>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default App;
