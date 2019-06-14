import React from 'react'
import {
  createBottomTabNavigator
} from 'react-navigation';

import StackNavigator from './StackNavigator'
import LinksScreen from '../screens/LinksScreen';

const BottomTabNavigator = createBottomTabNavigator({
  Home: StackNavigator,
  Link: LinksScreen
});

export default BottomTabNavigator
