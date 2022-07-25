import React, {useState, useEffect} from 'react';
import {Text, View, PermissionsAndroid, SafeAreaView} from 'react-native';
import Contacts from 'react-native-contacts';

import Picker from './src/picker';
// import ImagePickerApp from './src/imagepicker';

const App = () => {
  // useEffect(() => {
  //   PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
  //     title: 'Contacts',
  //     message: 'This app would like to view your contacts.',
  //     buttonPositive: 'Please accept bare mortal',
  //   }).then(() => {
  //     Contacts.getAll()
  //       .then(contacts => {
  //         console.log(contacts);
  //       })
  //       .catch(err => console.log(err));
  //   });
  // }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>Hello from Library App for contacts</Text>
      </View>
      <Picker />
    </SafeAreaView>
  );
};

export default App;
