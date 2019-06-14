import React from 'react';
import {
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
  } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export default ({title, imageUrl, onPress, ComponentToDisplay}) => (
  <TouchableOpacity 
    onPress={onPress}
    style={{
      display: 'flex',
      flex: 1,
    }}>
    <ImageBackground source={{uri: imageUrl}} style={{
      flex: 1,
      width: '100%',
      }}>
        <View style={{
          flex:1,
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: 15
        }}>
          <Text style={{
            color: 'white',
            fontSize: 26,
            fontWeight: "100",
          }}>
            {title}
          </Text>
          <MaterialIcons
              name="settings-remote"
              size={26}
              style={{ marginTop: 15 }}
              color="white"
            />
          <ComponentToDisplay />
        </View>
    </ImageBackground>
  </TouchableOpacity>
);