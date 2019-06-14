import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function SignupScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Signup !</Text>
    </View>
  );
}
SignupScreen.navigationOptions = {
  title: 'Signup'
};
const styles = StyleSheet.create({

});