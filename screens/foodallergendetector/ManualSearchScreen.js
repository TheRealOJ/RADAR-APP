import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Platform, Alert, ActivityIndicator, StatusBar, Dimensions, Image, ScrollView, TextInput} from 'react-native'
import {IconButton} from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {WebView} from 'react-native-webview'
const textColor = '#fff'
const themeColor = '#FF914D'

export default class ToolsNavigationScreen extends React.Component{
    state = {
       queryText: null,
    }
    onChangeText = (text) => {
        this.setState({
          queryText: text,
        })
      }
    render(){
        return(
        <View style={styles.welcomer}><StatusBar barStyle="light-content"/>
            
            <View style={styles.search}> 
            <TextInput
                 placeholder="Enter a food name"
                 placeholderTextColor="#D3D3D3"
                 autoCapitalize="none"
                 style={{flex: 1, padding: 0}}
                 onChangeText={this.onChangeText}
             /> 
             <IconButton
             icon="check"
             color= '#2777E1'
             size={20}
             onPress={() => 
               this.props.navigation.navigate('Courses Results', {queryText: this.state.queryText})}
             />
          </View>
                <View style={{paddingTop: 100}}></View>
            <View style={{flexDirection: 'row',}}>
                <TouchableOpacity style={styles.toolBox} onPress={() => 
                this.props.navigation.navigate('Courses Results', {queryText: 'Computer Science'})}>
                    <Text></Text>
                    <Text style={styles.title}>Milk Allerge</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.toolBox} onPress={() => 
                this.props.navigation.navigate('Courses Results', {queryText: 'American Studies'})} >
                    <Text style={styles.title}>American Studies</Text>
                </TouchableOpacity>
                
            </View>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.toolBox} onPress={() => 
                this.props.navigation.navigate('Courses Results', {queryText: 'Engineering'})} >
                    <Text style={styles.title}>Engineering</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.toolBox} onPress={() => 
                this.props.navigation.navigate('Course Results', {queryText: 'Life Sciences'})} >
                    <Text style={styles.title}>Life Sciences</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.toolBox} onPress={() => 
                this.props.navigation.navigate('Courses Results', {queryText: 'Chemistry'})} >
                    <Text style={styles.title}>Chem</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.toolBox} onPress={() => 
                this.props.navigation.navigate('Courses Results', {queryText: 'Physics'})} >
                    <Text style={styles.title}>Physics</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.toolBox} onPress={() => 
                this.props.navigation.navigate('Courses Results', {queryText: 'Business'})} >
                    <Text style={styles.title}>Business</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.toolBox} onPress={() => 
                this.props.navigation.navigate('Courses Results', {queryText: 'Calculus'})} >
                    <Text style={styles.title}>Calculus</Text>
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
    toolBox: {
        alignItems: "center",
        width: (175),
        margin: 8,
        borderRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 24,
        shadowRadius: 10,
        backgroundColor: `${themeColor}`,
        shadowOpacity: 0.1,
        flexDirection: 'row'
    },
    title: {
        fontSize: 18, color: `${textColor}`, fontWeight: "600", paddingLeft:10
    },
    search: {
        flex: 1,
        position:'absolute', 
        top: 0,
        marginTop: Platform.OS === 'ios' ? 40 : 20, 
        flexDirection:"row",
        backgroundColor: '#fff',
        width: '90%',
        alignSelf:'center',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
        borderColor: '#000'
      },
})