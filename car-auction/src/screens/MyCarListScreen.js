import React,{Component} from 'react'
import {View, Text, FlatList} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import CarList from '../Components/CarList'

const mockData = [
    {
        vin : 'abc',
        manufacturer : 'Tesla',
        model : 'Model 3',
        year : 2018,
        image : 'https://pngimg.com/uploads/tesla_car/tesla_car_PNG42.png'
    },
    {
        vin : 'abc123',
        manufacturer : 'Tesla',
        model : 'Model 3',
        year : 2017,
        image : 'https://ccnwordpress.blob.core.windows.net/journal/2018/08/EIBACH-TESLA-MODEL-3-After.jpg'
    }
]


export default class MyCarListScreen extends Component {
    constructor(props){
        super(props)
        this.state = {myCarList : mockData}
    }
   
    render() {
      
        return (
            <View>
               <CarList carList = {this.state.myCarList}></CarList>
            </View>
        )
    }
}