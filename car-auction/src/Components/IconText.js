import React,{Component} from 'react'
import {View, Text} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

export default class IconText extends Component {
    static defaultProps = {
        iconName : '',
        text : '',
        size : 20
    }
    render() {
        return (
            <View style = {{flexDirection : 'row'}}>
                                    <Ionicons name = {this.props.iconName} size = {this.props.size}/>
                                <Text style = {{marginLeft : 10, fontSize : this.props.size}}>{this.props.text}</Text>
                            </View>
        )
    }
}