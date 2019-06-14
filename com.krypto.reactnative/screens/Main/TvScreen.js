import React, { useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground
} from 'react-native';
import {Button} from 'native-base'

import TabBarIcon from '../../components/TabBarIcon';
const img = 'https://st3.depositphotos.com/5946506/17128/v/600/depositphotos_171286838-stock-video-old-wooden-vintage-tv-on.jpg';

const TvScreen = (props) => {
  const { tv, tvToggle } = props;
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: img}} style={styles.background}>
        {
          tv ?  <Text style={styles.colorOn}>TV On</Text>
          :
          <Text style={styles.colorOff}>TV Off</Text>
        }
        <Button
            style={styles.button}
            transparent
            onPress={() => {
              tvToggle(!tv)
            }}>
            <TabBarIcon library='Feather' name='power' size={45} focused="focused"/>
        </Button>
        </ImageBackground>
      </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  colorOn: {
    color: '#28a745',
    fontSize: 48,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  colorOff: {
    color: 'red',
    fontSize: 48,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  button: {
    alignSelf: 'center',
    margin: 20
  },
  background: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
  

export default TvScreen;
