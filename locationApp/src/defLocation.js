import React, {useState} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const DefLocation = () => {
  const [latitude, setLat] = useState(0);
  const [longitude, setLong] = useState(0);
  Geolocation.getCurrentPosition(
    position => {
      console.log('Latitude');
      console.log(position.coords.latitude);
      console.log('Longitude');
      console.log(position.coords.longitude);
      const latitude = JSON.stringify(position.coords.latitude);
      const longitude = JSON.stringify(position.coords.longitude);
      setLat(latitude);
      setLong(longitude);
    },
    error => alert(error.message),
    {
      enableHighAccuracy: true,
      timeout: 200000,
      maximumAge: 1000,
    },
  );

  return (
    <SafeAreaView>
      <View>
        <Text>Get Current Location</Text>
        <Text>Latitude: {latitude}</Text>
        <Text>Longitude: {longitude}</Text>
      </View>
    </SafeAreaView>
  );
};

export default DefLocation;
