import React, {useState} from 'react';
import {Text, View, SafeAreaView, Button, Platform} from 'react-native';
import {Icon, Header, Overlay} from 'react-native-elements';

import SuperText from './src/widgets/superText';

const PlatformApp = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  console.log(Platform);

  const checkSupport = () => {
    if (Platform.OS === 'ios') {
      if (Platform.Version < 15) {
        return false;
      }
    } else {
      if (Platform.Version < 30) {
        return false;
      }
    }
    return true;
  };

  return (
    <SafeAreaView>
      <View>
        <Header
          leftComponent={
            <Icon
              name="email"
              color="#f50"
              type="entypo"
              onPress={() => alert('open sidedrawer')}
            />
          }
          centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
          rightComponent={{icon: 'home', color: '#fff'}}
        />
        <View>
          <Text>Hello form Front screen</Text>
        </View>
        <SuperText style={{backgroundColor: 'red'}}>
          Hello this is my reusable component
        </SuperText>
      </View>
      <View>
        <Icon name="rowing" />
        <Icon name="facebook" backgroundColor="#3b5998">
          Login with Facebook
        </Icon>
      </View>
      <View>
        {checkSupport() ? (
          <Overlay isVisible={true}>
            <Text>
              {Platform.OS === 'ios'
                ? 'Welcome to your ios'
                : 'Welcome to android'}
            </Text>
          </Overlay>
        ) : (
          <Overlay isVisible={true}>
            <Text>Sorry your app is not supported</Text>
          </Overlay>
        )}
      </View>
    </SafeAreaView>
  );
};

export default PlatformApp;
