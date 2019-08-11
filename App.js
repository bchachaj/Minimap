import React, { Component, Fragment } from 'react';
import { Provider as AuthProvider } from './lib/src/context/AuthContext';
import { setNavigator } from './lib/src/Router';

import { 
  createAppContainer,
  createStackNavigator, 
  createBottomTabNavigator, 
  createSwitchNavigator
} from 'react-navigation';

import AccountScreen from './lib/src/screens/AccountScreen';
import LoginScreen from './lib/src/screens/LoginScreen';
import MapCreateScreen from './lib/src/screens/MapCreateScreen';
import MapFocusScreen from './lib/src/screens/MapFocusScreen';
import MapListScreen from './lib/src/screens/MapListScreen';
import SignUpScreen from './lib/src/screens/SignUpScreen';

const switchNavigator = createSwitchNavigator({
    authFlow: createStackNavigator({
      Signup: SignUpScreen, 
      Login: LoginScreen
    }),
    mainFlow: createBottomTabNavigator({
      CreateMap: MapCreateScreen, 
      Account: AccountScreen,
      mapFlow: createStackNavigator({ 
        MapList: MapListScreen, 
        MapFocus: MapFocusScreen
      })
    })
});

const App = createAppContainer(switchNavigator); 

export default () => {
  return(
    <AuthProvider>
      <App ref={(navigator) => setNavigator(navigator)} /> 
    </AuthProvider>
  )
};