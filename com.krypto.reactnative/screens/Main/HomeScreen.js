import React, { useEffect }from 'react';
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    ActivityIndicator
  } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import Section from '../../components/Section';
import DisplayDoorInfo from '../../components/Display/DisplayDoorInfo';
import DisplayTvInfo from '../../components/Display/DisplayTvInfo';
import DisplayHeatingInfo from '../../components/Display/DisplayHeatingInfo';
import DisplayLightsInfo from '../../components/Display/DisplayLightsInfo';

const HomeScreen = (props) => {
  const { navigate } = props.navigation;
  const { doorOpened, heating, lights, tv, loadHeating, loadDoor } = props;
  useEffect(() => {
    loadHeating();
    loadDoor();
  }, []);

  return (
      <SafeAreaView style={styles.container}>
          <Section
            title="Door"
            imageUrl="https://enoughwork.com/wp-content/uploads/2016/11/door-1089560_1280.jpg"
            onPress={() => {
              navigate("Door");
            }}
            ComponentToDisplay={DisplayDoorInfo(doorOpened)}
          />
          <Section
            title="TV"
            imageUrl="https://i.ytimg.com/vi/y7SRPjskxAI/maxresdefault.jpg"
            onPress={() => {
              navigate("TV");
            }}
            ComponentToDisplay={DisplayTvInfo(tv)}
          />
          <Section
            title="Heating"
            imageUrl="https://i.ytimg.com/vi/4bHRyCE1N5s/maxresdefault.jpg"
            onPress={() => {
              navigate("Heating");
            }}
            ComponentToDisplay={DisplayHeatingInfo(heating)}
          />
          <Section
            title="Lights"
            imageUrl="https://cnet1.cbsistatic.com/img/Yt8SJ0oesFOrLgJBH0K9SBFv5_Y=/1600x900/2016/01/28/57f7ee05-d71c-431b-a5c5-2281d4a8bcd5/smarthousekidsroomphotos-11.jpg"
            onPress={() => {
              navigate("Lights");
            }}
            ComponentToDisplay={DisplayLightsInfo(lights)}
          />
      </SafeAreaView>
  )
};

HomeScreen.navigationOptions = {
  title: 'Ma Chambre',
  header: null,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
  mainText: {
      fontSize: 48,
      color: '#fff',
  },
  loading: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
 
export default HomeScreen;