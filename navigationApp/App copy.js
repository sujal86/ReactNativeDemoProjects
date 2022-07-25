import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View, Button, Image} from 'react-native';

import Home from './src/home';
import Users from './src/users';
import LogoTitle from './src/utils/logoTitle';
import MyCustomDrawer from './src/utils/customDrawer';
import Logo from './src/images/user.jpg';

const Stack = createNativeStackNavigator();
const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Home_Settings">
      {props => <Text>Home Settings Screen</Text>}
    </Stack.Screen>
    <Stack.Screen name="Home_Post">
      {props => <Text>Home Post Screen</Text>}
    </Stack.Screen>
  </Stack.Navigator>
);
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const UserTab = () => (
  <Tab.Navigator>
    <Tab.Screen name="Users" component={Users} />
    <Tab.Screen name="Users_Settings">
      {props => <Text>Users Settings Screen</Text>}
    </Tab.Screen>
    <Tab.Screen name="Profile">
      {props => <Text>User Profile Screen</Text>}
    </Tab.Screen>
  </Tab.Navigator>
);

// - Home
//    .settings
//    .posts
// - Users
//    .settings
//    .profile
// - Post

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Main" component={HomeStack} />
        <Drawer.Screen name="Users" component={UserTab} />
        <Drawer.Screen name="Posts">
          {props => <Text>Posts main</Text>}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
