// src/App.jsx

import React from 'react';
import LeafletMap from './components/LeafletMap/LeafletMap';
import './App.css';

const App = () => {
    return (
        <div className="app-container">
            <h1>Weather and Map Information</h1>
            <LeafletMap />
        </div>
    );
};

export default App;
