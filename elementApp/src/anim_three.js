import {color} from '@rneui/base';
import React, {useRef} from 'react';
import {Text, View, StyleSheet, Button, Animated} from 'react-native';

const AnimThree = () => {
  const first = useRef(new Animated.Value(1)).current;
  const reds = useRef(new Animated.ValueXY()).current;
  const blues = useRef(new Animated.Value(1)).current;

  const runAnim = () => {
    Animated.sequence([
      Animated.timing(first, {
        toValue: 0,
      }),
      Animated.parallel([
        Animated.spring(reds, {
          toValue: {x: 200, y: 300},
        }),
        Animated.timing(blues, {
          toValue: 0,
        }),
      ]),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Button title="Anim Third" onPress={runAnim} />
      <Animated.View style={{opacity: first}}>
        <View style={styles.first}>
          <Text> Anim First</Text>
        </View>
      </Animated.View>
      <Animated.View style={reds.getLayout()}>
        <View style={styles.square}>
          <Text> Anim Another</Text>
        </View>
      </Animated.View>
      <Animated.View style={{opacity: blues}}>
        <View style={styles.squareTwo}>
          <Text> Square Two</Text>
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
  squareTwo: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
  first: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
  },
});

export default AnimThree;
