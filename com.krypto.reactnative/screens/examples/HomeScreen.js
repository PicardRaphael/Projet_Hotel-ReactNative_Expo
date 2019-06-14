import * as WebBrowser from 'expo-web-browser';
import React from 'react';
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

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Bienvenue chez Krypto !!</Text>
      <Button 
        title="Go voir Krypto !"
        onPress={() => {
          navigation.navigate('Krypto');
        }}
      />
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: 'Home',
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
    marginBottom: 10,
  }
});
