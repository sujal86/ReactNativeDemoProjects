import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          console.log('Pressed Card View');
        }}>
        <View>
          <Text>Another Click</Text>
        </View>
        <View>
          <TouchableWithoutFeedback
            onPress={() => {
              console.log('Pressed Call Image');
            }}>
            <Text>First Click</Text>
          </TouchableWithoutFeedback>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;
