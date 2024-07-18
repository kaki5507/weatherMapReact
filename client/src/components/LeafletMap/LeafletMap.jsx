// src/components/LeafletMap/LeafletMap.jsx

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './LeafletMap.css';

const LeafletMap = () => {
    // 서울 중심 좌표
    const seoulPosition = [37.5665, 126.9780];

    // 한국의 남서쪽과 북동쪽 경계 좌표
    const southWest = [33.0, 124.0];
    const northEast = [39.5, 132.0];
    const bounds = [southWest, northEast];

    return (
        <div className="map-container">
            <MapContainer
                center={seoulPosition}
                zoom={13}
                className="map"
                maxBounds={bounds}
                maxBoundsViscosity={1.0}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />
                <Marker position={seoulPosition}>
                    <Popup>
                        서울 중심 좌표
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default LeafletMap;
