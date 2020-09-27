import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Platform, Alert, ActivityIndicator, StatusBar, Dimensions, Image, ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {WebView} from 'react-native-webview'
const themecolor = '#000'
const tabcolor = '#FF5757'

export default class HomeScreen extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            displayName: "",
        }
    }
    render(){
        return(
        <View style={styles.welcomer}><StatusBar barStyle="light-content"/>
            <Text style={{fontWeight: "700", fontSize: 30, paddingBottom: 10}}>Air Pollution Forecasts</Text>
            <View
            style={{
                borderTopWidth: 6,
                borderTopColor: `${tabcolor}`,
                borderRadius: 3,
                width: 280,
                paddingBottom: 30, 
            }}
            />
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.coupon} onPress={() => 
                this.props.navigation.navigate('Current AQI')}>
                    <Image style={styles.image}source={require('./../../assets/current.jpg')}/>
                    <Text></Text>
                <Text style={styles.title}>Current {'\n'}AQI</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.coupon} onPress={() => 
                this.props.navigation.navigate('Current Pollen')} >
                    <Image style={styles.image}source={require('./../../assets/pollen.png')}/>
                    <Text style={styles.title}>Current Pollen</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.coupon} onPress={() => 
                this.props.navigation.navigate('Pollution Heatmap')} >
                    <Image style={styles.image}source={require('./../../assets/pollution1.png')}/>
                    <Text style={styles.title}>Pollution Heatmap</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.coupon} onPress={() => 
                this.props.navigation.navigate('AQ Heatmap')} >
                    <Image style={styles.image}source={require('./../../assets/hm.png')}/>
                    <Text style={styles.title}>Air Quality Heatmap</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.coupon} onPress={() => 
                this.props.navigation.navigate('Pollen Heatmap')} >
                    <Image style={styles.image}source={require('./../../assets/pollenhm.png')}/>
                    <Text style={styles.title}>Pollen Heatmap</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.coupon} onPress={() => 
                this.props.navigation.navigate('Health Reccomendations')} >
                    <Image style={styles.image}source={require('./../../assets/health1.png')}/>
                    <Text style={styles.title}>Health{'\n'} Advice</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    welcomer: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#fff',
        alignItems: 'center'
    },

    image: {
        width: 40,
        height: 40,
    },
    coupon: {
        alignItems: "center",
        width: (175),
        margin: 8,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 24,
        shadowRadius: 10,
        backgroundColor: '#fff',
        shadowOpacity: 0.1,
        flexDirection: 'row'
    },
    title: {
        fontSize: 18, color: `${themecolor}`, fontWeight: "600", paddingLeft:10
    }
})