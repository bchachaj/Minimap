import React from 'react';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';


import MapView from './components/Map/MapView';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 0 }} hideNavBar={true}>
      <Scene key="root" hideTabBar={true}>

          <Scene key="map" component={MapView} hideNavBar={true}/>

      </Scene>
    </Router>
  );
};

export default RouterComponent;
