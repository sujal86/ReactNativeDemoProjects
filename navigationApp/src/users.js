import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const Users = props => {
  const navigation = useNavigation();
  // const route = useRoute();
  // const {id, codeName} = route.params;
  useEffect(() => {
    setTimeout(() => {
      navigation.setOptions({
        headerRight: () => (
          <Button title="Say something" onPress={() => alert('something')} />
        ),
      });
    }, 2000);
  }, [navigation]);

  return (
    <View>
      {/* <Text>ID:{id}</Text>
      <Text>CodeName:{codeName}</Text> */}
      <Button
        title="User Setting"
        onPress={() => console.log('USER SETTINGS')}
        // props.navigation.navigate('Users_Settings')}
      />
      <Button
        title="User Profile"
        onPress={() => console.log('USER PROFILE')}
        // props.navigation.navigate('Profile')}
      />
      {/* <Button
        title="side drawer"
        onPress={() => navigation.toggleDrawer()}
        // onPress={() => navigation.openDrawer()}
        // onPress={() => navigation.closeDrawer()}
      /> */}
    </View>
  );
};
export default Users;
