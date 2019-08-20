import React,{Component} from 'react'
import {View, Text, FlatList,AsyncStorage} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import CarList from '../Components/CarList'
import { Ionicons } from '@expo/vector-icons';
import { NavigationEvents } from 'react-navigation'


const mockData = [
    {
        vin : 'SK엔카',
        manufacturer : '람보르기니',
        model : 'huracan-evo',
        year : 2019,
        image : 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/gateway-family/huracan/car/huracan-evo.png',
        
    },
    {
        vin : '보배드림',
        manufacturer : 'Tesla',
        model : 'Model 3',
        year : 2017,
        image : 'https://ccnwordpress.blob.core.windows.net/journal/2018/08/EIBACH-TESLA-MODEL-3-After.jpg',
        
    }
]

export default class MyCarListScreen extends Component {
    constructor(props){
        super(props)
        this.state = {myCarList : mockData}
        this.initMyCar();
    }
    initMyCar = async() => {
        // AsyncStorage.removeItem('myCar')
        let carList = await AsyncStorage.getItem("myCar")
        if (carList === null) {
            await AsyncStorage.setItem(
                "myCar", JSON.stringify(mockData)
            )
            carList = mockData;
        }
        else {
        carList = JSON.parse(carList);
        }
        this.setState({myCarList : carList})
    }
    addMyCar(vin,manufacturer,model,year,image) {
        const car = {
            vin : vin,
            manufacturer : manufacturer,
            model : model,
            year : year,
            image : Image
        }
        const newCarList = this.state.myCarList.concat(car)
        this.setState({carList : newCarList})
    }

    static navigationOptions = ({navigation}) => {
        const params =  navigation.state.params || {};

        return {
            headerRight : (
                <TouchableOpacity 
                style = {{ padding : 5, paddingRight : 15}}
                onPress = {() => {
                    navigation.push('MyCarAdd')

                }}
               >
               <Ionicons name = {'ios-add'} size = {35} color = {'white'}/>
                </TouchableOpacity>
            ),
            title : 'My Cars'
            }
    }
   
    render() {
      
        return (
            <View>
                <NavigationEvents
                onWillFocus = {payload => this.initMyCar()}
                />
               <CarList carList = {this.state.myCarList}
               {...this.props}/>
            </View>
        )
    }
}