import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text, View, Button, Icon} from 'react-native';

import Home from './src/home';
import Users from './src/users';
import LogoTitle from './src/utils/logoTitle';
import MyCustomDrawer from './src/utils/customDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavApp = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <MyCustomDrawer {...props} />}
        defaultStatus={'closed'} // Or open
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
          drawerActiveTintColor: 'blue',
          drawerActiveBackgroundColor: 'orange',
          drawerInactiveTintColor: 'black',
          itemStyle: {marginTop: 20},
          labelStyle: {fontSize: 20},
          // style: {backgroundColor: 'grey'},
        }} // false
        // drawerContentOption={{
        //   drawerActiveTintColor: 'red',
        //   drawerActiveBackgroundColor: 'orange',
        //   itemStyle: {marginTop: 20},
        //   labelStyle: {fontSize: 20},
        //   style: {backgroundColor: 'grey'},
        // }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          // options={{
          //   drawerIcon: color => {
          //     <Icon name="" size={22} color={color} />;
          //   },
          // }}
        />
        <Drawer.Screen
          name="Users"
          component={Users}
          initialParams={{id: 1, codeName: 'Sujal'}}
        />
        <Drawer.Screen name="Contact" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavApp;
