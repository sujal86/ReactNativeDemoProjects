import React from 'react';
import {Text, View, Button} from 'react-native';

const Home = props => {
  return (
    <View>
      {/* <Text>Home Screen</Text>
      <Text>{props.route.params ? props.route.params.active : null}</Text>
      <Button
        title="Go to users"
        onPress={() =>
          props.navigation.navigate('Users', {
            id: 23,
          })
        }
      /> */}
      <Button
        title="Go to home settings"
        onPress={() => console.log('GO TO HOME SETTINGS')}
        // props.navigation.navigate('Home_Settings')}
      />
      <Button
        title="Go to home post"
        onPress={() => console.log('GO TO HOME POST')}
        // props.navigation.navigate('Home_Post')}
      />
    </View>
  );
};
export default Home;
