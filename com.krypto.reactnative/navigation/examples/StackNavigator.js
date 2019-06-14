import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator
} from 'react-navigation';

import TabBarIcon from '../../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import KryptoScreen from '../screens/KryptoScreen';


const StackNavigator = createStackNavigator({
  Home: HomeScreen,
  Krypto: KryptoScreen
});

StackNavigator.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

export default StackNavigator;