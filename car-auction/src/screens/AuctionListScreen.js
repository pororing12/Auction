import React,{Component} from 'react'
import {View} from 'react-native'
import CarList from '../Components/CarList';

const mockAuctionData = [
    {
        vin : 'SK엔카',
        manufacturer : '람보르기니',
        model : 'huracan-evo',
        year : 2019,
        image : 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/gateway-family/huracan/car/huracan-evo.png',
        price : '$3800'
    },
    {
        vin : '보배드림',
        manufacturer : 'Tesla',
        model : 'Model 3',
        year : 2017,
        image : 'https://ccnwordpress.blob.core.windows.net/journal/2018/08/EIBACH-TESLA-MODEL-3-After.jpg',
        price : '$3500'
    }
]


export default class AuctionListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carList : mockAuctionData
        }
    }
    static navigationOptions = ({ navigation }) => {
        return{
            title : "Auction"
        }
    }
    render() {
        return (
            <View>
                <CarList 
                    carList = {this.state.carList}
                        toNavigate = "CarAuctionDetail"
                        {...this.props}/>
            </View>
        )
    }
}

