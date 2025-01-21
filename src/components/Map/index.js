import React, { useRef, useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMapEvent } from 'react-leaflet';
import { FaMapMarkerAlt } from 'react-icons/fa'; 
import './Map.css'; 

const MapMarkerControl = ({ setMarkerVisible }) => {
    useMapEvent('mousedown', () => {
        setMarkerVisible(false);
    });

    useMapEvent('zoom', () => {
        setMarkerVisible(false);
    });

    return null;
};

const Map = () => {
    const position = [25.515347050783678, -103.38517922364576]; 
    const [markerVisible, setMarkerVisible] = useState(true);
    const mapRef = useRef(null); 

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.invalidateSize();
        }
    }, []);

    const handleMapMouseDown = () => {
        setMarkerVisible(false);
    };

    return (
        <div className="map-container" onMouseDown={handleMapMouseDown}>
            <MapContainer center={position} zoom={16} style={{ height: "60vh", width: "100%" }} ref={mapRef}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <MapMarkerControl setMarkerVisible={setMarkerVisible} />
            </MapContainer>
            {markerVisible && (
                <div className="map-marker">
                    <FaMapMarkerAlt size={32} color="red" />
                </div>
            )}
        </div>
    );
};

export default Map;
