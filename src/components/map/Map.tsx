import React, { useEffect, useState } from 'react';
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import { Key } from './Key';
import Geocode from 'react-geocode';
import { WriteButton } from '../styles/home/HomeActionButton.style';
import { TitleButton, StyleDescriptions } from '../styles/map/Map.style';

Geocode.setApiKey(Key);

type Props = {
  user: object;
};

const Map = ({ user }: Props) => {
  const [states, SetStates] = useState<any>({
    address: '',
    city: '',
    area: '',
    state: '',
    zoom: 10,
    height: 400,
    mapPosition: {
      lat: 37.413294,
      lng: 127.269311,
    },
    markerPosition: {
      lat: 37.413294,
      lng: 127.269311,
    },
  });

  const getCity = (addressArray: any) => {
    let city = '';
    for (let i = 0; i < addressArray.length; i++) {
      if (
        addressArray[i].types[0] &&
        'administrative_area_level_2' === addressArray[i].types[0]
      ) {
        city = addressArray[i].long_name;
        return city;
      }
    }
  };

  const getArea = (addressArray: any) => {
    let area = '';
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0]) {
        for (let j = 0; j < addressArray[i].types.length; j++) {
          if (
            'sublocality_level_1' === addressArray[i].types[j] ||
            'locality' === addressArray[i].types[j]
          ) {
            area = addressArray[i].long_name;
            return area;
          }
        }
      }
    }
  };

  const getState = (addressArray: any) => {
    let state = '';
    for (let i = 0; i < addressArray.length; i++) {
      for (let i = 0; i < addressArray.length; i++) {
        if (
          addressArray[i].types[0] &&
          'administrative_area_level_1' === addressArray[i].types[0]
        ) {
          state = addressArray[i].long_name;
          return state;
        }
      }
    }
  };

  const onMarkerDragEnd = (e: any) => {
    let newLat = e.latLng.lat();
    let newLng = e.latLng.lng();

    Geocode.fromLatLng(newLat, newLng).then((response) => {
      const address = response.results[0].formatted_address,
        addressArray = response.results[0].address_components,
        city = getCity(addressArray),
        area = getArea(addressArray),
        state = getState(addressArray);
      SetStates({
        address: address || '',
        area: area || '',
        city: city || '',
        state: state || '',
        markerPosition: {
          lat: newLat,
          lng: newLng,
        },
        mapPosition: {
          lat: newLat,
          lng: newLng,
        },
      });
    });
  };

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        SetStates({
          mapPosition: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
          markerPosition: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        });
      });
    } else {
      console.error('Geolocation is not supported by this browser!');
    }
  }, []);

  const MapWithAMarker = withScriptjs(
    withGoogleMap((props: any) => (
      <GoogleMap
        defaultZoom={17}
        defaultCenter={{
          lat: states.mapPosition.lat,
          lng: states.mapPosition.lng,
        }}
        onClick={onMarkerDragEnd}
      >
        <Marker
          draggable={true}
          onDragEnd={onMarkerDragEnd}
          position={{
            lat: states.markerPosition.lat,
            lng: states.markerPosition.lng,
          }}
        >
          <InfoWindow>
            <div style={{ padding: '0' }}>{states.address || '현재 위치'}</div>
          </InfoWindow>
        </Marker>
      </GoogleMap>
    ))
  );

  return (
    <div style={{ position: 'relative' }}>
      <TitleButton>
        <h2 style={{ marginTop: '10px' }}>Map</h2>
        {user && (
          <WriteButton to="/write" cyan>
            글쓰기
          </WriteButton>
        )}
      </TitleButton>
      <StyleDescriptions bordered style={{ marginBottom: '2rem' }}>
        <StyleDescriptions.Item label="City">
          {states.city}
        </StyleDescriptions.Item>
        <StyleDescriptions.Item label="Area">
          {states.area}
        </StyleDescriptions.Item>
        <StyleDescriptions.Item label="State">
          {states.state}
        </StyleDescriptions.Item>
        <StyleDescriptions.Item label="Address">
          {states.address}
        </StyleDescriptions.Item>
      </StyleDescriptions>
      <MapWithAMarker
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${Key}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default React.memo(Map);
