import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
} from 'react-native';

const Generate = ({add}) => (
  <Pressable
    onPress={() => add()}
    // underlaycolor="orange"
    // activeOpacity={0.1}
    // onHideUnderlay={() => alert('hide')}
    // onShowUnderlay={() => alert('Show')}
  >
    <View style={Styles.generate}>
      <Text style={{color: '#fff'}}>Add Number</Text>
    </View>
  </Pressable>
);

const Styles = StyleSheet.create({
  generate: {
    backgroundColor: '#00BCD4',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
});

export default Generate;
