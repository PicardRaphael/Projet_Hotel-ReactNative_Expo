import React, { useEffect} from 'react';
import {Text, View, StyleSheet, ImageBackground, ActivityIndicator} from 'react-native';
import {Button} from 'native-base'
import TabBarIcon from '../../components/TabBarIcon'

const img = 'https://i.ytimg.com/vi/4bHRyCE1N5s/maxresdefault.jpg';

export default function HeatingScreen(props) {
  const { heating, sendHeating, loadHeating, isLoading } = props;

  useEffect(() => {
    loadHeating();
  }, []);

  if(isLoading){
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large"/>
      </View>
    )
  }
  return (
    <View style={styles.container}>
    <ImageBackground blurRadius={2} source={{uri: img}} style={styles.background}>
        <Button
            style={styles.button}
            transparent
            onPress={() => {
              sendHeating(heating.power, heating.temp + 1);
            }}>
            <TabBarIcon library='AntDesign' name='pluscircleo' size={45} focused="focused"/>
        </Button>
        <Text style={styles.mainText}>
            {heating.power ? `${heating.temp}°C` : 'OFF'}
        </Text>
        <Button
            style={styles.button}
            transparent
            onPress={() => {
              sendHeating(heating.power, heating.temp - 1);
            }}>
            <TabBarIcon
                library='AntDesign'
                name='minuscircleo'
                size={45}
                focused="focused"/>
        </Button>
        <Button
            style={styles.button}
            transparent
            onPress={() => {
              sendHeating(!heating.power, heating.temp)
            }}>
            <TabBarIcon library='Feather' name='power' size={45} focused="focused"/>
        </Button>
        </ImageBackground>
    </View>
  );
}
HeatingScreen.navigationOptions = {
  title: 'Heating'
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  background: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'center',
    margin: 20
  },
  mainText: {
      fontSize: 48,
      textAlign: 'center',
      color: 'white',
  },
  loading: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
});