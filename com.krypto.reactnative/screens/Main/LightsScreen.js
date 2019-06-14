
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Slider } from 'react-native-elements';
import ColorPalette from 'react-native-color-palette';

const LightsScreen = (props) => {
  const { lights, setLights } = props;

  return (
    <ImageBackground 
      style={styles.background}
      blurRadius={1}
      source={{uri: "https://cnet1.cbsistatic.com/img/Yt8SJ0oesFOrLgJBH0K9SBFv5_Y=/1600x900/2016/01/28/57f7ee05-d71c-431b-a5c5-2281d4a8bcd5/smarthousekidsroomphotos-11.jpg"}}
    >
    <View style={[styles.settings, { backgroundColor: lights.color, opacity: lights.brightness < 0.3 ? 0.4 : lights.brightness }]}>
      <View
        style={{
          alignItems: 'stretch',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 4,
          marginBottom: 15,
        }}
      >
        <Text style={{ fontSize: 20, marginRight: 10 }}>Brightness </Text>
        <Slider value={lights.brightness} style={{ flex: 1 }} onValueChange={value => setLights('brightness', value)} />
      </View>
        <View
          style={{
            alignItems: 'stretch',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 4,
            padding: 10,
          }}
        >
          <ColorPalette
            onChange={color => setLights('color', color)}
            defaultColor={lights.color}
            colors={['#C0392B', '#E74C3C', '#9B59B6', '#F', '#2980B9']}
            title={'Choose light colors'}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

LightsScreen.navigationOptions = {
  title: 'Lights'
};

const styles = StyleSheet.create({
  settings: {
    borderRadius: 4,
    width: '85%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#27c2a6'
  },
  background: {
    width: '100%',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    fontSize: 48,
    color: '#fff'
  }
});

export default LightsScreen;
