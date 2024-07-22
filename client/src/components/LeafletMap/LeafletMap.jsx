import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import './LeafletMap.css';

const LeafletMap = () => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/weather');
                const extractedData = response.data.response.body.items.item.map(item => ({
                    position: [item.nx, item.ny],
                    temp: item.T1H, // 기온
                    description: item.PTY // 강수 형태
                }));
                setWeatherData(extractedData);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, []);

    const seoulPosition = [37.5665, 126.9780];
    const southWest = [33.0, 124.0];
    const northEast = [39.5, 132.0];
    const bounds = [southWest, northEast];

    return (
        <div className="map-container">
            <MapContainer
                center={seoulPosition}
                zoom={6}
                className="map"
                maxBounds={bounds}
                maxBoundsViscosity={1.0}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />
                {weatherData.map((data, index) => (
                    <Marker key={index} position={data.position}>
                        <Popup>
                            <strong>Temperature:</strong> {data.temp}°C<br />
                            <strong>Weather:</strong> {data.description}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default LeafletMap;
