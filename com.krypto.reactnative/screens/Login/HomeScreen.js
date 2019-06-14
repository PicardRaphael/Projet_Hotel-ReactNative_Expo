import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ImageBackground,
  } from 'react-native';
import { Button } from 'native-base';

import homeLoginImage from '../../assets/images/hotel.jpg';
import logoImage from '../../assets/images/logo.png';

const HomeScreen = (props) => {
  const { navigate } = props.navigation;
  return (
      <View style={styles.container}>
        <ImageBackground blurRadius={0.5} source={homeLoginImage} style={styles.background}>
          <Image style={styles.logo} source={logoImage} />
          <View>
            <Button
              style={styles.button}
              large
              success
              rounded
              onPress={() => {
                navigate('Login')
              }}
            >
              <Text style={styles.buttonText}>SignIn</Text>
            </Button>
            <Button
              style={styles.button}
              large
              primary
              rounded
              onPress={() => {
                navigate('Signup')
              }}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
          </Button>

          </View>
          
        </ImageBackground>
      </View>
  )
};

HomeScreen.navigationOptions = {
  title: 'hO\'tel',
  header: null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  background: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 50,
  },
  button: {
    width: 300,
    margin: 5,
    display: 'flex',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    margin: 15,
  },
  mainText: {
      fontSize: 36,
      color: 'white',
      fontWeight: "700",
  }
});


export default HomeScreen;
