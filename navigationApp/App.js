import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackNav from './app-nav-Stack';
import DrawerNavApp from './app-nav-drawer';
import Login from './screens/login';
import Home from './screens/home';
import CropView from './CropView';
import DocumentScan from './DocumentScan';
import RectangleScan from './RectangleScan';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="login">
    //     <Stack.Screen name="login" component={Login} />
    //     <Stack.Screen name="home" component={Home} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <DrawerNavApp />
    // <CropView />
    // <DocumentScan />
    <RectangleScan />
  );
};

export default App;
