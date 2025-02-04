import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Set map container style
const containerStyle = {
  width: "15rem",
  height: "15rem",
};

// Set the default location (e.g., New York City)
const defaultCenter = {
  lat: 40.712776, // Latitude
  lng: -74.005974, // Longitude
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={12}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
