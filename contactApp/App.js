import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Button,
  PermissionsAndroid,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
import Contacts from 'react-native-contacts';

import Picker from './src/picker';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const requestPermission = async () => {
    try {
      if (Platform.OS === 'ios') {
        return true;
      } else {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
          {
            title: 'Contacts',
            message: 'This app would like to view your contacts.',
            buttonPositive: 'Please accept bare mortal',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getContacts = () => {
    requestPermission().then(didGetPermission => {
      if (didGetPermission) {
        Contacts.getAll().then(contacts => {
          setContacts(contacts);
          console.log(contacts);
        });
      }
    });
  };

  const addContact = () => {
    requestPermission().then(didGetPermission => {
      if (didGetPermission) {
        const newContact = {
          familyName: 'Harsh',
          givenName: 'Shah',
        };
        Contacts.addContact(newContact).then(() => {
          getContacts();
        });
      }
    });
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Hello from contacts App</Text>
      </View>
      <View>
        <Button title="get contacts" onPress={() => getContacts()} />
        <Button title="Add contacts" onPress={() => addContact()} />
        <ScrollView>
          {contacts.map(item => (
            <View
              key={item.recordID}
              style={{
                padding: 10,
                borderBottomColor: 'red',
                borderBottomWidth: 1,
              }}>
              <Text>First Name: {item.givenName}</Text>
              <Text>Last Name: {item.familyName}</Text>
              <Text>
                Email:{' '}
                {item.emailAddresses[0] ? item.emailAddresses[0].email : null}
              </Text>
              <Text>
                Mobile:{' '}
                {item.phoneNumbers[0] ? item.phoneNumbers[0].number : null}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default App;
