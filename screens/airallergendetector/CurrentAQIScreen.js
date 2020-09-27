
import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Title, CardItem, Item, Input } from 'native-base';
import {View, StyleSheet, StatusBar, Dimensions} from 'react-native'
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import * as WebBrowser from 'expo-web-browser'
import {MaterialCommunityIcons, Entypo, Feather, Fontisto} from '@expo/vector-icons'
import { useLinking } from '@react-navigation/native';
const themecolor = '#fff'
 
const screenWidth = Dimensions.get('window').width
const tabcolor = '#FF5757'
export default class Learning extends Component {

   constructor(props){
       super(props);
       this.state = {
           location: null,
           datetime: null,
           apiData: null,
       }
   }
   componentDidMount(){
       this._getLocationAsync()
   }
   _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    
    if(status === 'granted'){
      let location = await Location.getCurrentPositionAsync({});
      this.setState({ location});
        console.log(location.coords)
        this.requestAPI()
        console.log('the value of this.state.apiData' + this.state.apiData)
    }
    else{
      Alert.alert('Location services has not been enabled. Please go to the Settings and enable it.')
    }
  }
   requestAPI = () => {
    fetch(`https://api.breezometer.com/air-quality/v2/current-conditions?lat=${this.state.location.coords.latitude}&lon=${this.state.location.coords.longitude}&key=8d69f59b396740af97c6ace202996808&features=breezometer_aqi,local_aqi,health_recommendations,sources_and_effects,pollutants_concentrations,pollutants_aqi_information`).then((response) => response.json())
    .then((res) => {
        this.setState({apiData: res})
    })
    }

  render() {
    if(this.state.apiData === null){
        return(<View></View>)
    }
    return (
      <Container>
        <Content>
        <View style={styles.container}>
            <StatusBar/>
    <Text style={{fontSize: 16, paddingLeft: 10, marginBottom: 5}}>Showing Results as of {this.state.apiData.data.datetime}</Text>
            <View
            style={{
                borderTopWidth: 6,
                borderTopColor: `${tabcolor}`,
                borderRadius: 3,
                width: 140,
            }}
            />
            <View style={{margin: 8, borderRadius: 20, paddingVertical: 20, paddingHorizontal: 24, width: (screenWidth-64/2), backgroundColor: `${tabcolor}`}}>
                <Text style={{color: `${themecolor}`}}>Air Quality Index</Text>
                <Text></Text>
                <View style={{flexDirection: 'row'}}>
                    <Entypo name="air" size={30} color="#fff" style={{paddingRight: 5}}/>
                    <Text></Text>
        <Text style={{fontSize: 24, color: `${themecolor}`}}>{this.state.apiData.data.indexes.baqi.aqi}</Text>
                </View>
            </View>
            <View style={{margin: 8, borderRadius: 20, paddingVertical: 20, paddingHorizontal: 24, width: (screenWidth-64/2), backgroundColor: `${tabcolor}`}}>
                <Text style={{color: `${themecolor}`}}>Level of Severness:</Text>
                <Text></Text>
                <View style={{flexDirection: 'row'}}>
                    <Feather name="alert-triangle" size={24} color={themecolor} style={{paddingRight: 5}} />
                    <Text></Text>
                    <Text style={{fontSize: 24, color: `${themecolor}`}}>{this.state.apiData.data.indexes.baqi.category}</Text>
                </View>
            </View>
            <View style={{margin: 8, borderRadius: 20, paddingVertical: 20, paddingHorizontal: 24, width: (screenWidth-64/2), backgroundColor: `${tabcolor}`}}>
                <Text style={{color: `${themecolor}`}}>Most Dominant Pollutant:</Text>
                <Text></Text>
                <View style={{flexDirection: 'row'}}>
                    <Fontisto name="trash" size={24} color="#fff" style={{paddingRight: 5}}/>
                    <Text></Text>
                    <Text style={{fontSize: 24, color: '#fff'}}>{this.state.apiData.data.indexes.baqi.dominant_pollutant}</Text>
                </View>
            </View>
        </View>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      padding: 15,
    },
});