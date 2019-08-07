import React,{Component} from 'react'
import {View, Text, StyleSheet,TextInput, TouchableOpacity} from 'react-native'
import {AsyncStorage} from 'react-native'
import MyButton from '../Components/MyButton';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        const loginId = this.props.navigation.getParam('loginId')
        this.state = {
            userid : '',
            pwd : '',
            loginId : loginId
        }

        if (loginId !== null) {
            return this.props.navigation.navigate('MyCarList', {
                loginId : loginId
            }
          )
        }
    }
    submitSignup = async() => {
        const userid = this.state.userid;
        const pwd = this.state.pwd;

        let user = await AsyncStorage.getItem(`user:${userid}`);
        if (user !== null) {
            alert("이미 가입된 아이디입니다")
            return false
        }
        AsyncStorage.setItem(`user:${userid}`, pwd);
        return this.props.navigation.navigate('MyCarList', {
            loginId : loginId
        }
      )
    }
    
    render() {
        return (
            <View style = {styles.container}>
                <Text  
                    style = {{color : 'tomato', fontSize : 25}}
                    >CAR AUCTIO
                </Text>
                    <TextInput 
                        style = {styles.textinput} 
                        placeholder = 'ID' 
                        onChangeText = {(text) => this.setState({userid:text})}
                        >
                    </TextInput>
                    <TextInput 
                        style = {styles.textinput} 
                        placeholder = '비밀번호' 
                        secureTextEntry = {true}
                        onChangeText = {(text) => this.setState({pwd:text})}
                        >   
                    </TextInput>

                    <MyButton
                    text = "로그인"
                    iconName = "ios-add"
                    />
                    
                    <MyButton
                    text = "회원가입"
                    iconName = "ios-add"
                    onPress = {this.submitSignup}/>

                {/* <TouchableOpacity style = {styles.touch}>
                    <Text style = {{color : 'white', fontSize : 18 , textAlign : 'center', justifyContent : 'center'}}>회원가입 / 로그인</Text>
                </TouchableOpacity> */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    textinput : {
        borderWidth : 1, 
        borderRadius : '5',
        height : 50,
        width : '85%',
        margin : 8
    },
    touch : {
        borderWidth : 1, 
        borderRadius : '5',
        height : 50,
        width : '85%',
        margin : 8,
        backgroundColor : 'tomato'
    }
})