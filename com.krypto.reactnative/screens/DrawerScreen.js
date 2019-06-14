import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView
} from 'react-native';
import UserProfil from '../components/UserProfil';

const DrawerScreen = (props) => (
  <ScrollView>
    <UserProfil {...props} />
  </ScrollView>
);

const styles = StyleSheet.create({
  text: {
    marginTop: 30,
    marginLeft: 20
  }
});
  

export default DrawerScreen;