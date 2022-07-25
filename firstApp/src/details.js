import React from 'react';
import {Text, View, Button} from 'react-native';

const Details = props => {
  return (
    <View>
      <Text>Details Screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => props.navigation.popToTop()}
      />
    </View>
  );
};

export default Details;
