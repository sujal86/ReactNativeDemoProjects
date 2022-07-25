import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Nav = ({nameOfApp}) => (
  <View style={Styles.nav}>
    <Text>{nameOfApp}</Text>
  </View>
);

const Styles = StyleSheet.create({
  nav: {
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
});

export default Nav;
