import React,{Component} from 'react'
import {Text, View, TextInput, StyleSheet} from 'react-native'
import { Ionicons,Feather } from '@expo/vector-icons';
import {AsyncStorage} from 'react-native'
import MyButton from '../Components/MyButton';


export default class MyCarAddScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vinText : '',
            manufacturer : '',
            model : '',
            year : '',
            image : ''
        }
    }
    static navigationOptions = ({navigation}) => {
        const params =  navigation.state.params || {};

        return {
            title : 'MyCar Add'
            }
    }

    submitButton = async() => {
        
        if(this.state.vin == '' || this.state.image == ''){
            return false
        }
        myCar = await AsyncStorage.getItem('myCar');
        myCar = JSON.parse(myCar);
        const newCar = {
            vin : this.state.vin,
            manufacturer : this.state.manufacturer,
            model : this.state.model,
            year : this.state.year,
            image : this.state.image 
        }
        const newCarList = myCar.concat(newCar);
        try {
            await AsyncStorage.setItem('myCar', JSON.stringify(newCarList));
        } catch {
            console.log('error 발생')
        }
        return this.props.navigation.navigate('MyCarList')
        
    }
    render() {
        return (
            <View>
                <View>
                <Text style = {{textAlign : 'center', marginTop : 50, color : 'gray'}}>
                    <Feather  name = 'alert-triangle' style = {{color : 'gray'}}/>등록하시려는 차의 정보를 정확히 입력해주세요</Text>
                <View style = {{flexDirection : 'column', alignItems : 'center'}}>
                    
                    <TextInput 
                        style  = {styles.textinput} 
                        placeholder = '  VIN' 
                        onChangeText = {(text) => this.setState({vin : text})}>
                    </TextInput>

                    <TextInput 
                        style  = {styles.textinput} 
                        placeholder = '  제조사' 
                        onChangeText = {(text) => this.setState({manufacturer : text})}
                        >   
                    </TextInput>

                    <TextInput 
                        style  = {styles.textinput} 
                        placeholder = '  모델명'
                        onChangeText = {(text) => this.setState({model : text})}
                        >
                    </TextInput>

                    <TextInput 
                        style  = {styles.textinput} 
                        placeholder = '  연식' 
                        onChangeText = {(text) => this.setState({year : text})}
                        >
                    </TextInput>

                    <TextInput 
                        style  = {styles.textinput}
                        placeholder = '  이미지 URL' 
                        onChangeText = {(text) => this.setState({image : text})}
                        >
                    </TextInput>

                    <MyButton style = {{width : "85%"}}
                    iconName = 'ios-add'
                    text = "차량 등록"
                    size = {20}
                    onPress = {this.submitButton}
                    />
                </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textinput : {
            borderWidth : 0.5,
            borderRadius : '5',
            height : 50,
            width : "85%",
            margin : 8,
            borderColor : 'gray'
           
    }
})