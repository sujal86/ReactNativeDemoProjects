import React, {createRef, useState, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';

import CurrentLocation from './src/currentLocation';

const App = () => {
  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const tokyoRegion = {
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const ahmadabadRegion = {
    latitude: 23.0225,
    longitude: 72.5714,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const mapView = React.createRef();
  const animateMap = () => {
    mapView.current.animateToRegion(
      {
        // Takes a region object as parameter
        longitude: 72.5614,
        latitude: 23.0235,
        latitudeDelta: 0.4,
        longitudeDelta: 0.4,
      },
      1000,
    );
  };
  function CustomMarker() {
    return (
      <View style={styles.marker}>
        <Text style={styles.color}>Ahmedabad</Text>
      </View>
    );
  }
  const mapRef = useRef(null);
  const goToTokyo = () => {
    //Animate the user to new region. Complete this animation in 3 seconds
    mapRef.current.animateToRegion(tokyoRegion, 3 * 1000);
  };
  const goToAhmedabad = () => {
    //Animate the user to new region. Complete this animation in 3 seconds
    mapRef.current.animateToRegion(ahmadabadRegion, 3 * 1000);
  };
  return (
    <SafeAreaView style={styles.container}>
      {/*Render our MapView*/}
      <MapView
        ref={mapRef}
        style={styles.map}
        //specify our coordinates.
        initialRegion={ahmadabadRegion}
        onRegionChangeComplete={region => setRegion(region)}>
        <Polyline
          coordinates={[ahmadabadRegion, tokyoRegion]} //specify our coordinates
          strokeColor={'#000'}
          strokeWidth={3}
          lineDashPattern={[1]}
        />
        <Marker coordinate={ahmadabadRegion}>
          {/* <CustomMarker /> */}
          {/* pinColor="blue" image={require('./src/images/Ahmedabad.jpeg')} */}
        </Marker>
      </MapView>
      <Button onPress={() => goToTokyo()} title="Go to Tokyo" />
      <Button onPress={() => goToAhmedabad()} title="Go to Ahmedabad" />

      <Text style={styles.text}>Current latitude: {region.latitude}</Text>
      <Text style={styles.text}>Current longitude: {region.longitude}</Text>
    </SafeAreaView>
    // <TouchableOpacity onPress={animateMap}><Text>Start</Text></TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    alignItems: 'center',
    paddingBottom: 30,
    color: 'red',
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  marker: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#FFD000',
    borderColor: '#FF9500',
    borderWidth: 2,
    borderRadius: 50,
    elevation: 10,
    textDecorationColor: 'red',
  },
});

export default App;
