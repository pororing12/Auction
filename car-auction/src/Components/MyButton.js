import React,{Component} from 'react'
import{TouchableOpacity,View,Text} from 'react-native'
import{Ionicons} from '@expo/vector-icons'

export default class MyButton extends Component {
    static defaultProps = {
        size : 20,
        style : {},
        iconName : '',
        text : '',
        onPress: ()=>(console.log("버튼 클릭"))
    }
    render() {
        return (
            <TouchableOpacity style = {
                [{marginTop : 30,
                flexDirection : 'row', 
                justifyContent : 'center',
                backgroundColor : 'tomato',
                width : "40%",
                padding : 20,
                borderRadius : '10'},
                this.props.style]
                }
                onPress = {this.props.onPress}>
                <View style = {
                    {flexDirection : 'row', 
                    justifyContent : 'content'}
                    }>

                <Ionicons 
                    name = {this.props.iconName} 
                    size = {this.props.size} 
                    size = {23} 
                    color = 'white'/>

                <Text 
                style = {
                    {fontSize : this.props.size, 
                    marginLeft : 20, 
                    color : 'white'}
                    }>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}