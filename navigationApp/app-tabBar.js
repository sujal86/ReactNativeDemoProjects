import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View, Button, Image} from 'react-native';

import Home from './src/home';
import Users from './src/users';
import LogoTitle from './src/utils/logoTitle';
import MyCustomDrawer from './src/utils/customDrawer';
import Logo from './src/images/user.jpg';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={route => ({
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Home') {
              return focused ? (
                <Image source={Logo} style={{width: 50, height: 50}} />
              ) : (
                'ios-information-circle-outline'
              );
            }
            return null;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'green',
          tabBarActiveBackgroundColor: 'orange',
          tabBarStyle: {backgroundColor: 'lightgrey'},
          tabBarLabelStyle: {fontSize: 20},
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen
          name="Users"
          component={Users}
          options={{tabBarLabel: 'Pesron'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
