import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View, Button} from 'react-native';

import Home from './src/home';
import Users from './src/users';
import LogoTitle from './src/utils/logoTitle';

const Stack = createNativeStackNavigator();
const defaultHeader = {
  headerTitleAlign: 'center',
  headerBacktitle: 'Ja Pachho',
  headerStyle: {
    backgroundColor: 'cyan',
    borderBottomWidth: 6,
    borderBottomColor: 'red',
  },
  headerTintColor: 'black',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    TextDecorationLine: 'line-through',
  },
};

const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          ...defaultHeader,
          headerTitle: props => LogoTitle(props),
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Users"
          component={Users}
          initialParams={{
            id: 1,
            codeName: 'Vivek',
          }}
          options={({navigation}) => ({
            headerLeft: () => (
              <Button
                title="do less"
                onPress={() => navigation.navigate('Home')}
              />
            ),
          })}

          // headerLeft: () => (
          //   <Button title="do less" onPress={() => alert('less')} />
          // ),
          // headerRight: () => (
          //   <Button title="do more" onPress={() => alert('More')} />
          // ),
          //headerTitle: props => LogoTitle(props),
        />
      </Stack.Navigator>
      <View>
        <Text>Hello</Text>
      </View>
    </NavigationContainer>
  );
};

export default StackNav;
