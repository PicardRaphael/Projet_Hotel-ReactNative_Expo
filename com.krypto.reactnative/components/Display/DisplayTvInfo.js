import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default (tv) => () => (
  tv ?  <View>
  <Text style={styles.info}>On</Text>
  </View> :  <View>
    <Text style={styles.info}>Off</Text>
  </View>
);

const styles = StyleSheet.create({
  info: {
    color: '#B22222',
    fontSize: 16,
    fontWeight: "100",
    marginTop: 10 
  }
});