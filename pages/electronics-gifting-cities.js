import React, { useState } from 'react';

import * as laptopCitiesData from '../data/laptop-cities.json';

import {
  GoogleMap,
  InfoWindow,
  Marker,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps';

function Map() {
  const [selectedcity, setSelectedcity] = useState(null);

  return (
    <GoogleMap defaultCenter={{ lat: 34.5794, lng: -118.1164 }} defaultZoom={4}>
      {laptopCitiesData.cities.map((city) => (
        <Marker
          key={laptopCitiesData.name}
          onClick={() => {
            setSelectedcity(city);
          }}
          position={{
            lat: city.latitude,
            lng: city.longitude,
          }}
        />
      ))}

      {selectedcity && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedcity(null);
          }}
          position={{
            lat: selectedcity.latitude,
            lng: selectedcity.longitude,
          }}
        >
          <div>
            <h2>{selectedcity.name}</h2>
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
