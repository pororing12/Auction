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
import AuctionListScreen from './src/screens/AuctionListScreen';
import AuctionDetailScreen from './src/screens/AuctionDetailScreen';

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

const AuctionStack = createStackNavigator({
  AuctionList : {
    screen : AuctionListScreen
  },

  CarAuctionDetail : {
    screen : AuctionDetailScreen
  }
}, {
  defaultNavigationOptions
})

const tabNavigator = createBottomTabNavigator({
  'MyCars':{
    screen:MycarStack
  },
  'Auction':{
    screen: AuctionStack
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

  })

  })

  const RootStack = createStackNavigator(
    {
    'Login':{
    screen: LoginScreen
    },
    
    Main: {
    screen: tabNavigator,
    },
    },{
    mode:'modal',
    headerMode:'none'
    
    })
    
    const AppContainer = createAppContainer(RootStack);




export default function App() {
return(
<AppContainer></AppContainer>


)


}