import React,{Component} from 'react'
import{View, Text,TouchableOpacity, Image, StyleSheet, Dimensions} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

const winSize = Dimensions.get('screen')

export default class CarItem extends Component {
    static defaultProps = {
        item : {
            vin : '',
            manufacturer : '',
            model : '',
            year : 2000,
            image : '',
            price : ''
        },
        style : {},
        onPress : ()=>(console.log('onPress'))
    }
    render() {
        return (
           <View style = {{borderBottomColor : "#bbb", borderBottomWidth : StyleSheet.hairlineWidth}}>
            <TouchableOpacity style = {[styles.container, this.props.style]}
                            onPress = {this.props.onPress}>
                <View style = {{flex : 1}}>
                <Image source = {{uri : this.props.item.image}} style = {{width :'130%', height : '130%', resizeMode : 'contain'}} ></Image>
                </View>

                <View style = {{flex : 1.5, marginLeft : 50}}>
                <Text style = {{fontSize : 20, fontWeight : 'bold', }}>{this.props.item.model}</Text>
                <Text><Ionicons name = 'ios-business'></Ionicons>{this.props.item.manufacturer}<Ionicons name = 'ios-calendar'>{this.props.item.year}</Ionicons>
                <Ionicons  name = 'ios-trending-up'></Ionicons></Text>

                </View>
                
                <View style = {{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                <Text style = {{fontSize : 23, color : "#bbb", marginLeft : 10}}>{this.props.item.price}</Text>
                </View>
            
                <Text></Text>
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'row',
        width : '100%',
        padding : 20,
        marginRight : 25,
        // borderWidth : 0.5,
        borderColor : 'gray'
    }
})