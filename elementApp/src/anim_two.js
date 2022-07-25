import {color} from '@rneui/base';
import React, {useRef} from 'react';
import {Text, View, StyleSheet, Button, Animated} from 'react-native';

const AnimTwo = () => {
  const moveElTwo = useRef(new Animated.Value(1)).current;

  const runMyTimingAnim = () => {
    Animated.timing(moveElTwo, {
      toValue: 0,
      duration: 500,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Button title="Anim Two" onPress={runMyTimingAnim} />
      <Animated.View
        style={{
          //opacity: moveElTwo,
          transform: [
            {
              rotateX: moveElTwo.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: ['0deg', '180deg', '0deg'],
              }),
            },
          ],
          //   left: moveElTwo.interpolate({
          //     inputRange: [0, 1],
          //     outputRange: [300, 0],
          //   }),
        }}>
        <View style={styles.square}>
          <Animated.Text
            style={{
              fontSize: moveElTwo.interpolate({
                inputRange: [0, 0.5, 0.8, 1],
                outputRange: [15, 5, 100, 15],
              }),
              color: moveElTwo.interpolate({
                inputRange: [0, 1],
                outputRange: ['blue', 'orange'],
              }),
            }}>
            <Text> Anim Another</Text>
          </Animated.Text>
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

export default AnimTwo;
