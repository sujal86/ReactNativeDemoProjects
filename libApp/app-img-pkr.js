import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  Button,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const App = () => {
  const [avatar, setAvatar] = useState(null);

  const getAvatar = () => {
    launchImageLibrary(
      {
        title: 'Select and awesome picture',
        takePhotoButtonTitle: 'Take a super pretty one',
        chooseFromLibraryButtonTitle: 'really? and oldie ?',
      },
      response => {
        if (response.didCancel) {
          console.log('user canceled');
        } else if (response.errorMessage) {
          console.log(response.errorMessage);
        } else {
          setAvatar(response.uri);
          console.log('User selected photo');
          console.log(avatar);
          const source = {uri: 'data:image/jpeg;base64,' + response.data};
          console.log(source);
        }
      },
    );
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Hello From Library App</Text>
      </View>
      <View>
        <Image source={{uri: avatar}} style={styles.avatar} />
        <Button title="Add your avatar" onPress={getAvatar} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: '100%',
    height: 400,
  },
});

export default App;
