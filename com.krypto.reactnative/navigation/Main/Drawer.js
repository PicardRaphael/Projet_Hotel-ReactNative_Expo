import React from 'react'
import {
  createDrawerNavigator
} from 'react-navigation'

import MainTabNavigator from './MainTabNavigator';
import DrawerScreen from '../../screens/DrawerScreen';

const Drawer = createDrawerNavigator({
  MainApp: MainTabNavigator
}, {
  contentComponent: DrawerScreen
})

export default Drawer