import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default (doorOpened) => () => (
  doorOpened ?  <View>
  <Text style={styles.info, styles.true}>Open</Text>
  </View> :  <View>
    <Text style={styles.info}>close</Text>
  </View>
);

const styles = StyleSheet.create({
  info: {
    color: '#B22222',
    fontSize: 16,
    fontWeight: "100",
    marginTop: 10 
  },
  true: {
    color: 'green',
    fontSize: 16,
    fontWeight: "100",
    marginTop: 10 ,
    fontWeight: '700'
  }
});