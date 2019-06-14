import React, { useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Switch,
  ActivityIndicator
  } from 'react-native';

import { Button } from 'native-base';  
const blurRadius = 2;

const DoorScreen = (props) => {
  const { doorOpened, sendDoor, loadDoor, isLoading } = props;

  useEffect(() => {
    loadDoor()
  }, [])

  if(isLoading){
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large"/>
      </View>
    )
  }

  return (
      <View style={styles.container}>
      <ImageBackground blurRadius={blurRadius} source={{uri: 'https://enoughwork.com/wp-content/uploads/2016/11/door-1089560_1280.jpg'}} style={styles.background}>
      <Switch
        trackColor= {{true:"limegreen", false: "red"}}
        onValueChange = {(value) => sendDoor(value)}
        value = {doorOpened}/>

      {
        doorOpened ? 
        <View>
          <Text style={styles.colorSucces}>
          Door Opened
          </Text>
        </View>
        :

        <View>
        <Text style={styles.colorDanger}>
          Door Closed
        </Text>
      </View>


      }
      </ImageBackground>
    </View>
  )
}

DoorScreen.navigationOptions = {
  title: 'Door'
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
    mainText: {
        fontSize: 48,
    },
    colorDanger: {
      color: 'red',
      fontSize: 48,
      textTransform: 'uppercase',
      fontWeight: 'bold',
    },
    colorSucces: {
      color: '#28a745',
      fontSize: 48,
      textTransform: 'uppercase',
      fontWeight: 'bold',
  },
    button: {
      width: 300,
      margin: 25,
      display: 'flex',
      alignSelf: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: 'white',
      margin: 15,
    },
    loading: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });
  

export default DoorScreen;