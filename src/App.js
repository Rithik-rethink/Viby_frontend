import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Login from './Components/Login/Login.js';
import Register from './Components/Register/Register.js';
import Dashboard from './Components/Dashboard/Dashboard.js';

function App() {
    return (
      //BEM conventions for naming react classes
        <div className="app">
          <Dashboard/>
          <Login/>
          <Register/>   
          <Switch>
            {/* <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/> */}
          </Switch>
        </div>
    );
}

export default App;
