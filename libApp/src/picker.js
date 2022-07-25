import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, Button} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

const Picker = () => {
  const [avatar, setAvatar] = useState(null);

  const getAvatar = () => {
    ImagePicker.launchImageLibrary(
      {
        title: 'Select an awesome picture',
        takePhotoButtonTitle: 'Take a super pretty one !!',
        chooseFromLibraryButtonTitle: 'really? and oldie ?',
      },
      response => {
        console.log(response);
        if (response.didCancel) {
          console.log('user canceled');
        } else if (response.error) {
          console.log(response.error);
        } else {
          const source = {uri: 'data:image/jpeg;base64,' + response};
          console.log(source);
          setAvatar(response.assets[0].uri);
          console.log(avatar);
        }
      },
    );
  };

  return (
    <View>
      <Image source={{uri: avatar}} style={styles.avatar} />
      <Button title="Add your avatar" onPress={getAvatar} />
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: '100%',
    height: 400,
  },
});

export default Picker;
