import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

const ListItems = ({items, remove}) => {
  return items.map((item, i) => (
    <Pressable
      key={item}
      style={{width: '100%'}}
      onPress={() => remove(i)}
      onLongPress={() => alert('Pressed Long')}
      delayLongPress={3000}>
      <View style={Styles.listitems}>
        <Text>{item}</Text>
      </View>
    </Pressable>
  ));
};

const Styles = StyleSheet.create({
  listitems: {
    backgroundColor: '#cecece',
    alignItems: 'center',
    padding: 10,
    marginTop: 5,
    width: '100%',
  },
});

export default ListItems;
