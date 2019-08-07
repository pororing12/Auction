import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
createBottomTabNavigator,
createStackNavigator,
createAppContainer
}
from 'react-navigation';
import {Ionicons} from '@expo/vector-icons'
import MyCarListScreen from './src/screens/MyCarListScreen'
import MyCarDetailScreen from './src/screens/MyCarDeatilScreen';
import MyCarAddScreen from './src/screens/MyCarAddScreen';
import LoginScreen from './src/screens/LoginScreen';

const auction = function tempAuction(){
    return(
        <View></View>
    )

}
const setting =function tempSettings(){
    return(
        <View>
        </View>
    )
}

const defaultNavigationOptions={
      headerTintColor:'white',
      headerStyle:{
      backgroundColor:'tomato',
      },
};



const MycarStack = createStackNavigator({
  'Login' :  {
    screen : LoginScreen
  },
  'MyCarList':{
    screen:MyCarListScreen
  },
  'MyCarDetail' : {
    screen : MyCarDetailScreen
  },
  MyCarAdd : {
    screen : MyCarAddScreen
  }
},
{
    defaultNavigationOptions
})




const tabNavigator = createBottomTabNavigator({
  'MyCars':{
    screen:MycarStack
  },
  'Auction':{
    screen:auction
  },
  'Settings':{
  screen:setting
  }
},
{
  defaultNavigationOptions : ({navigation}) => ({
  tabBarIcon:({focused, horizontal, tintColor}) =>{
  const { routeName } = navigation.state;
  let iconName;
  if(routeName === 'MyCars'){
  iconName='ios-car';
  } else if (routeName === 'Auction'){
  iconName='ios-trending-up';
  }
  else if(routeName === 'Settings'){
  iconName='ios-settings';
  }

  return(
  <Ionicons
  name={iconName}
  size={horizontal ? 20 : 25}
  color={tintColor}
  />
  );


  },



  }),




  })

const AppContainer = createAppContainer(tabNavigator)



export default function App() {
return(
<AppContainer></AppContainer>


)


}