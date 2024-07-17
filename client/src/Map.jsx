import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ weatherData }) => {
    return (
        <MapContainer center={[37.5665, 126.9780]} zoom={7} style={{ height: '80vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
            />
            {weatherData.map((weather) => (
                <Marker key={weather.id} position={[weather.ny, weather.nx]}>
                    <Popup>
                        Base Date: {weather.base_date} <br />
                        Base Time: {weather.base_time} <br />
                        Category: {weather.category} <br />
                        Observation Value: {weather.obsr_value}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
