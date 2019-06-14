import React, { useEffect } from 'react';
import {
    ActivityIndicator,
    Text,
    View,
    StyleSheet,
    FlatList
  } from 'react-native';

import TabBarIcon from '../../components/TabBarIcon';

const listItem = ({item}) => {
  return(
    <View style={styles.listItem}>
      <Text style={styles.listItemTitle}>{item.title}</Text>
      <Text style={styles.listItemText}>{item.message}</Text>
    </View>
  )
}
const keyExtractor = (item, index) => item.id

const MessagesScreen = ({ loadMessages, isLoading, messages}) => {
  
  useEffect(() => {
    loadMessages();
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
      <FlatList 
        keyExtractor={keyExtractor}
        data={messages}
        renderItem={listItem}
      />
    </View>
  )
};

MessagesScreen.navigationOptions = {
  tabBarLabel: 'Messages',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='md-mail'
    />
  ),
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 15,
      backgroundColor: '#27c2a6',
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
    },
    listItem: {
      flex: 1,
      width: '100%',
      padding: 15,
    },
    listItemText: {
      fontSize: 10
    },
    listItemTitle: {
      fontSize: 20,
      fontWeight: 'bold'
    }
  });
  

export default MessagesScreen;