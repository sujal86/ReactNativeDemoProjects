import React, {useState} from 'react';
import {Text, View, Button, ImageBackground, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import user from '../images/user.jpg';
import indianFlag from '../images/indianFlag.png';
import bg from '../images/bg.png';
import ImageCropPicker from 'react-native-image-crop-picker';

const MyCustomDrawer = props => {
  const [image, setImage] = useState('');
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: 'lightgrey'}}>
        <ImageBackground
          source={bg}
          style={{
            flexDirection: 'column',
            padding: 20,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image source={indianFlag} style={{width: 40, height: 20}} />
          <Image
            source={image ? {uri: image} : user}
            style={{height: 40, width: 40, borderRadius: 20}}
          />
          <Text
            style={{color: 'blue'}}
            onPress={() => {
              ImageCropPicker.openPicker({
                width: 300,
                height: 400,
                cropping: true,
              }).then(img => {
                console.log('Image\t', img);
                setImage(img.path);
              });
              console.log('Upload Pressed');
            }}>
            Upload Photo
          </Text>
          <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
            Sujal Shah
          </Text>
        </ImageBackground>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            paddingTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
          }}>
          <DrawerItemList {...props} />
        </View>
        <View
          style={{
            flex: 1,
            paddingTop: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
            backgroundColor: 'white',
          }}>
          <Text
            style={{
              justifyContent: 'center',
              marginLeft: 20,
              paddingBottom: 20,
            }}>
            Custom Text
          </Text>
        </View>
        {/* <DrawerItem
      label={'Home'}
      // onPress={() => props.navigation.navigate('Home')}
    /> */}
        {/* <Button title="Home" onPress={() => props.navigation.navigate('Home')} /> */}
        {/* <Button
      title="Users"
      onPress={() => props.navigation.navigate('Users')}
    />
    <Button
      title="Contact"
      onPress={() => props.navigation.navigate('Home')}
    /> */}
        {/* <View>
      <Text>Hello Users...</Text>
    </View>
    <DrawerItemList {...props} />
    <DrawerItem label={'Contact'} onPress={() => alert('Contact Pressed')} /> */}
      </DrawerContentScrollView>
    </View>
  );
};

export default MyCustomDrawer;
