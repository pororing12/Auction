import React,{Component} from 'react'
import {View, Text,Image} from 'react-native'

import IconText from '../Components/IconText'

import AuctionList from '../Components/AuctionList'

export default class MyCarDetailScreen extends Component {

   
    constructor(props) {
        super(props);
        const myCar = props.navigation.getParam('item')
        this.state = {
            myCar : myCar
        }
        console.log(myCar)
    }
    
    static navigationOptions = ({ navigation}) => {
        const item = navigation.getParam('item')
        return {
            title : item.model,
        }
    }
    render() {
        return (
         <View>
             <View style = {{flexDirection : 'column', marginTop : 20, borderBottomWidth : 0.5, borderBottomColor : 'gray'}}> 
                 <Image source = {{ uri : this.state.myCar.image}}
                 style = {{
                     width : '100%',
                     height : 120,
                     resizeMode : 'cover',
                 }}
                 />

                 <View style = {{flexGrow : 1, paddingLeft : 10, marginTop : 20}}>
                     <View 
                        style ={{
                            position : 'absolute',
                            height : '70%',
                            width : 1,
                            left : '50%',
                            top : '15%',
                            backgroundColor : '#aaa',
                        }}
                        />
                        <View style = {{ flexDirection : 'row', flexWrap : 'wrap'}}>
                        <View style = {{flex : 1,}}>
                        
                        <IconText 
                                iconName = {'ios-barcode'}
                                text = {this.state.myCar.vin}
                                size = {20}
                        >
                            {this.state.myCar.vin}
                        </IconText>
                        
                        <IconText 
                                iconName = {'ios-business'}
                                text = {this.state.myCar.manufacturer}
                                size = {20}
                                >
                        </IconText>

                        </View>
                        <View style = {{flex : 1, }}>
                        <IconText 
                                iconName = {'ios-car'}
                                text = {this.state.myCar.model}
                                size = {20}
                                >
                        </IconText>
                        <IconText 
                                iconName = {'ios-calendar'}
                                text = {this.state.myCar.year}
                                size = {20}
                            >
                        </IconText>
                        </View>
                        </View>
                 </View>
             </View>

             <View>
             <AuctionList></AuctionList>
             </View>

         </View>  
        )
    }
}