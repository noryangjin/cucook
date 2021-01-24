import { useEffect, useState } from 'react';
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import { Key } from './Key';
import Geocode from 'react-geocode';
import 'antd/dist/antd.css';
import { Descriptions } from 'antd';
import { StyledAutoComplete } from '../styles/map/map.style';

Geocode.setApiKey(Key);

const Map = () => {
  const [states, SetStates] = useState<any>({
    address: '',
    city: '',
    area: '',
    state: '',
    zoom: 15,
    height: 400,
    mapPosition: {
      lat: 0,
      lng: 0,
    },
    markerPosition: {
      lat: 0,
      lng: 0,
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

  const placeSelected = (place: any) => {
    const address = place.formatted_address,
      addressArray = place.address_components,
      city = getCity(addressArray),
      area = getArea(addressArray),
      state = getState(addressArray),
      newLat = place.geometry.location.lat(),
      newLng = place.geometry.location.lng();
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
  };

  useEffect(() => {
    if (navigator.geolocation) {
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
      <>
        <StyledAutoComplete
          types={['(regions)']}
          onPlaceSelected={placeSelected}
        />
        <GoogleMap
          defaultZoom={17}
          defaultCenter={{
            lat: states.mapPosition.lat,
            lng: states.mapPosition.lng,
          }}
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
              <div>ssss</div>
            </InfoWindow>
          </Marker>
        </GoogleMap>
      </>
    ))
  );

  return (
    <div style={{ position: 'relative' }}>
      <h2>Map</h2>
      <Descriptions bordered style={{ marginBottom: '2rem' }}>
        <Descriptions.Item label="City">{states.city}</Descriptions.Item>
        <Descriptions.Item label="Area">{states.area}</Descriptions.Item>
        <Descriptions.Item label="State">{states.state}</Descriptions.Item>
        <Descriptions.Item label="Address">{states.address}</Descriptions.Item>
      </Descriptions>
      <MapWithAMarker
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${Key}&v=3.exp&libraries=geometry,drawing,places&language=ko`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default Map;
