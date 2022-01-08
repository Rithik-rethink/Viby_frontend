import React from 'react';
import './App.css';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Login from './Components/Login/Login.js';
import Register from './Components/Register/Register.js';
import Dashboard from './Components/Dashboard/Dashboard.js';

function App() {
    return (
      //BEM conventions for naming react classes
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
    );
}

export default App;
