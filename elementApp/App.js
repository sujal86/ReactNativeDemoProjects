import React, {useState} from 'react';
import {Text, View, SafeAreaView, Button, Platform} from 'react-native';
import {Icon, Header, Overlay} from 'react-native-elements';
import Model from 'react-native-modal';

import AnimOne from './src/anim_one';
import AnimTwo from './src/anim_two';
import AnimThree from './src/anim_three';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Header
          centerComponent={{text: 'Anim Project', style: {color: '#fff'}}}
        />
        {/* <AnimOne /> */}
        {/* <AnimTwo /> */}
        {/* <AnimThree /> */}
      </View>
    </SafeAreaView>
  );
};

export default App;
