import { useState } from 'react';
import React from 'react';
import './App.css';
import Home from './Home'
import Change from './Change';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/change/:id" element={<Change />} />
          </Routes>
        </div>
      </Router>
    </div>

  )
}

export default App
