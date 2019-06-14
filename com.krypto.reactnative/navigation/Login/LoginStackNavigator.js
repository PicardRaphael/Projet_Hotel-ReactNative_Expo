import React from 'react';
import {
  createStackNavigator
} from 'react-navigation';

import TabBarIcon from '../../components/TabBarIcon';

import HomeScreen from '../../screens/Login/HomeScreen';
import Login from '../../containers/Login';
import SignupScreen from '../../screens/Login/SignupScreen';


const LoginStackNavigator = createStackNavigator({
  Home: HomeScreen,
  Login: Login,
  Signup: SignupScreen,

},{
  headerMode: 'none',
});

export default LoginStackNavigator;