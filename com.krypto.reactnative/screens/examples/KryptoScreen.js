import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';

import { MonoText } from '../../components/StyledText';

export default function KryptoScreen({ navigation }) {
  const [count, setCount] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Krypto est là!</Text>
      {navigation.getParam('page') ? <Text style={styles.mainText}>{ navigation.getParam('page') }</Text> : null}
      <Button        
        title="Go Home !"
        onPress={() => {
          //navigation.navigate('Home');
          navigation.push('Krypto',{page: '1' })
          // .push regénère un nouvel écran
        }}
      />
      <Text 
        style={styles.countText}>{ count }</Text>
      <Button 
        style={styles.countButton}
        title="Augmente le conteur !"
        onPress={() => setCount(count+1)}
      />
    </View>
  );
}
KryptoScreen.navigationOptions = {
  //header: null pour rien voir
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainText: {
    color: 'red',
    marginBottom: 25, 
  },
  countText: {
    marginTop: 25,
    marginBottom: 25
  },
  countButton: {
    backgroundColor: 'red'
  }
});
