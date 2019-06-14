import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Drawer from './Main/Drawer'
import LoginStackNavigator from './Login/LoginStackNavigator';

const Switch = createSwitchNavigator(
  {
    Auth: LoginStackNavigator,
    App: Drawer,
  },
  {
    initialRouteName: 'Auth',
  }
);

export default createAppContainer(
  Switch,
);