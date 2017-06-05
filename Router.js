import {Scene, Router} from 'react-native-router-flux'
import React from 'react';
import Screen from './components/Screen';
import Home from './components/Home';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{paddingTop : 60}}>
      <Scene key="login" component={Screen} title="Login"/>
      <Scene key="home" component={Home} title="Home"/>
    </Router>
  );
};

  export default RouterComponent;
