import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
                    params: {
                        q: 'Seoul',
                        appid: 'your_api_key', // Replace with your actual API key
                        units: 'metric',
                    }
                });
                setWeatherData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchWeatherData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!weatherData) return null;

    return (
        <div className="App">
            <h1>Weather Information</h1>
            <p>City: {weatherData.name}</p>
            <p>Temperature: {weatherData.main.temp} °C</p>
            <p>Description: {weatherData.weather[0].description}</p>
        </div>
    );
};

export default App;
