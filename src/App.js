import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';

import Dashboard from './components/Dashboard';


class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<Dashboard />} />

        {/* Define more routes here */}

      </Routes>
    );
  }
}

export default App;



