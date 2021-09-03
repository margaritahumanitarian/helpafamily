import {
  GoogleMap,
  InfoWindow,
  Marker,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps';
import React, { useState } from 'react';

import laptopCitiesData from '../data/laptop-cities.json';

///The MHF office at 1543 E Palmdale Blvd. Suite E, Palmdale, CA 93550 to (Default zoom)
const MAP_CENTER_MHF_OFFICE = {
  lat: 34.5794,
  lng: -118.1164,
};
const DEFAULT_ZOOM = 4;

function Map() {
  const [selectedCity, setSelectedCity] = useState(null);
  return (
    <GoogleMap defaultCenter={MAP_CENTER_MHF_OFFICE} defaultZoom={DEFAULT_ZOOM}>
      {laptopCitiesData.cities.map((city) => (
        <Marker
          key={laptopCitiesData.name}
          onClick={() => {
            setSelectedCity(city);
          }}
          position={{
            lat: city.latitude,
            lng: city.longitude,
          }}
        />
      ))}

      {selectedCity && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedCity(null);
          }}
          position={{
            lat: selectedCity.latitude,
            lng: selectedCity.longitude,
          }}
        >
          <div>
            <h2>{selectedCity.name}</h2>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function GiftingCitiesMap() {
  return (
    <div className="h-screen w-screen">
      <MapWrapped
        containerElement={<div className="h-full" />}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.NEXT_PUBLIC_GMAPS_JS_API_KEY}`}
        loadingElement={<div className="h-full" />}
        mapElement={<div className="h-full" />}
      />
    </div>
  );
}
