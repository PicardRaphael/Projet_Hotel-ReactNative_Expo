import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default (lights) => () => (
  <View style={styles.lightsInfo}>
  <Text style={styles.info}>{lights.color}</Text>
  <Text style={styles.info}>{lights.brightness}</Text>
</View> 
);

const styles = StyleSheet.create({
  info: {
    color: '#B22222',
    fontSize: 16,
    fontWeight: "100",
    marginTop: 10 
  },
  lightsInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});