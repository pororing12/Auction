import React,{Component} from 'react'
import{View, Text,TouchableOpacity, Image, StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

export default class CarItem extends Component {
    static defaultProps = {
        item : {
            vin : '',
            manufacturer : '',
            model : '',
            year : 2000,
            image : ''
        },
        style : {}
    }
    render() {
        return (
            <TouchableOpacity style = {[styles.container, this.props.style]}>
                <View style = {{flex : 1}}>
                <Image source = {{uri : this.props.item.image}} style = {{width : "120%", height : '120%'}}></Image>
                </View>

                <View style = {{flex : 1, marginLeft : 50}}>
                <Text style = {{fontSize : 20, fontWeight : 'bold'}}>{this.props.item.model}</Text>
                <Text><Ionicons name = 'ios-calendar'></Ionicons>{this.props.item.manufacturer} {this.props.item.year}
                <Ionicons  name = 'ios-trending-up'></Ionicons></Text>
                </View>
                
                <View style = {{flex : 1}}>

                </View>
            
                <Text></Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'row',
        width : '100%',
        padding : 20,
        borderWidth : 0.5,
        borderColor : 'gray'
    }
})