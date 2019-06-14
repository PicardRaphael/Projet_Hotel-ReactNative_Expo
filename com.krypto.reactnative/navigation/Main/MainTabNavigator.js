import React from 'react'
import {
  createBottomTabNavigator
} from 'react-navigation';

import MyRoomStackNavigator from './MyRoomStackNavigator'
import Messages from '../../containers/Messages';

const MainTabNavigator = createBottomTabNavigator({
  MyRoom: MyRoomStackNavigator,
  Messages: Messages,
}, {
  tabBarOptions: {
      inactiveBackgroundColor: '#010101',
      inactiveTintColor: '#ddd',
      activeBackgroundColor: '#111',
      activeTintColor: '#fff',
}});

export default MainTabNavigator