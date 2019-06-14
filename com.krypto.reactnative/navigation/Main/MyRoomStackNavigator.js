import React from 'react';
import {
  createStackNavigator,
} from 'react-navigation';

import { BlurView } from 'expo-blur';

import TabBarIcon from '../../components/TabBarIcon';

import Home from '../../containers/Home';
import Door from '../../containers/Door';
import Heating from '../../containers/Heating';
import Tv from '../../containers/Tv';
import Lights from '../../containers/Lights';

const MyRoomStackNavigator = createStackNavigator({
  Home: Home,
  Door: Door,
  TV: Tv,
  Heating: Heating,
  Lights: Lights,

}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTransparent: true,
    headerTintColor: '#fff',
    headerBackground: <BlurView intensity={100} style={{ flex: 1, }}/>
  }
});

MyRoomStackNavigator.navigationOptions = {
  tabBarLabel: 'My Room',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='md-home'
    />
  ),
};

export default MyRoomStackNavigator;