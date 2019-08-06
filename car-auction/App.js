import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation'
import MyCarListScreen from './src/screens/MyCarListScreen';

const auction = function tempAuction() {
  return ( 
    <View></View>
  )
}

const settings = function tempSettings() {
  return (
    <View></View>
  )
}


const MyCarStack = createStackNavigator({
  'MyCarList' : {
    screen : MyCarListScreen
  }
})
const TabNavigator= createBottomTabNavigator({
  'MyCars' : {
    screen : MyCarStack,
    
  },
 'Auction' : {
    screen : auction,
   
    
  },
  'Settings' : {
    screen : settings,
   
  }

})

const AppContainer = createAppContainer(TabNavigator)




export default class App extends React.Component{
  render() {
    return (
        <AppContainer></AppContainer>
    )
  }
}

