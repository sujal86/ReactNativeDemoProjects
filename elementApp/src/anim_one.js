import {color} from '@rneui/base';
import React, {useRef} from 'react';
import {Text, View, StyleSheet, Button, Animated, Easing} from 'react-native';

const AnimOne = () => {
  const moveEl = useRef(new Animated.ValueXY()).current;

  const myAnim = () => {
    Animated.timing(moveEl, {
      toValue: {x: 100, y: 300},
      duration: 2000,
      delay: 1000,
      easing: Easing.elastic(1),
    }).start();
  };

  return (
    <View style={styles.container}>
      <Button title="start Animation" onPress={myAnim} />
      <Animated.View style={moveEl.getLayout()}>
        <View style={styles.square}>
          <Text>Hello from AnimOne</Text>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});

export default AnimOne;
