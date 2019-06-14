import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    ImageBackground
  } from 'react-native';

import userImage from '../assets/images/user.png';

const UserProfil = (props) => {
  const { navigate } = props.navigation;
  return (
      <View style={styles.container}>
          <ImageBackground
            source={userImage}
            style={{
              borderColor: 'white',
              borderRadius: 65,
              borderWidth: 1,
              width: 130,
              height: 130,
              marginBottom: 15,
              overflow: 'hidden',
              backgroundColor: 'white',
            }}
          />
          <Text style={styles.mainText}>
              Bonjour User
          </Text>
          <Button
            title="Logout"
            onPress={() => {
              props.navigation.navigate('Auth')
            }}
          />
      </View>
  )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 35,
      backgroundColor: '#333',
    },
    mainText: {
        fontSize: 28,
        color: '#fff',
        marginBottom: 25
    }
  });
  

export default UserProfil;