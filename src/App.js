import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Login from './Components/Login/Login.js';
import Register from './Components/Register/Register.js';
import Dashboard from './Components/Dashboard/Dashboard.js';

function App() {
  return (
    //BEM conventions for naming react classes
    <div className="app">
      <Route exact path='/' component={Login}/>
      <Route exact path='/register' component={Register}/>
      <Route exact path='/in' component={Dashboard}/>
    </div>
  );
}

export default App;
