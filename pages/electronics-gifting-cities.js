import {
  GoogleMap,
  InfoWindow,
  Marker,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps';
import React, { useState } from 'react';

import * as laptopCitiesData from '../data/laptop-cities.json';

function Map() {
  const [selectedCity, setSelectedCity] = useState(null);
  ///The MHF office at 1543 E Palmdale Blvd. Suite E, Palmdale, CA 93550 to (Default zoom)
  const MAP_CENTER_MHF_OFFICE = [34.5794, -118.1164];
  const DEFAULT_ZOOM = 4;
  return (
    <GoogleMap
      defaultCenter={{
        lat: MAP_CENTER_MHF_OFFICE[0],
        lng: MAP_CENTER_MHF_OFFICE[1],
      }}
      defaultZoom={DEFAULT_ZOOM}
    >
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
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div className="h-full" />}
        mapElement={<div className="h-full" />}
      />
    </div>
  );
}
