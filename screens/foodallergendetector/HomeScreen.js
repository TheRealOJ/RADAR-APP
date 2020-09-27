import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, StatusBar } from "react-native";
import { Container, Header, Content, ListItem, CheckBox, Body } from 'native-base';
import { render } from "react-dom";
const textColor = '#fff'
const themeColor = '#FF5757'
const checkboxColor = '#00AB66'
const pickImage = async () => {
    const options = { base64: true };
    let result = await ImagePicker.launchImageLibraryAsync(options, {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    // console.log(result);
    if (result.uri) {
      navigation.navigate("ConfirmLibraryImage", {
        photoUrl: result.uri,
        base64: result.base64,
      });
    }
  };
export default class ImageScreen extends React.Component {
    state= {
        soybeans: false,
        peanuts: false,
        shellfish: false,
        soy: false,
        vegetarian: false, 
        milk: false, 
        treenuts: false
    }
  render(){
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
        <View style={styles.textContainer}>
            <Text style={styles.title}>Confirm Your Allergens</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
                    <View style={styles.toolBox} onPress={() => 
                    this.props.navigation.navigate('Courses Results', {queryText: 'Engineering'})} >
                        <CheckBox checked={this.state.vegetarian} color={this.state.vegetarian ? checkboxColor : textColor} onPress={() => {
                            this.setState({vegetarian: !this.state.vegetarian})
                        }}/>
                        <Text>  </Text>
                        <Text style={styles.title1}>Vegetarian</Text>
                    </View>
                    <View style={styles.toolBox} onPress={() => 
                    this.props.navigation.navigate('Course Results', {queryText: 'Life Sciences'})} >
                        <CheckBox checked={this.state.peanuts} color={this.state.peanuts ? checkboxColor : textColor} onPress={() => {
                            this.setState({peanuts: !this.state.peanuts})
                        }}/>
                        <Text>  </Text>
                        <Text style={styles.title1}>Peanuts</Text>
                    </View>
        </View>
        <View style={{flexDirection: 'row'}}>
                    <View style={styles.toolBox} onPress={() => 
                    this.props.navigation.navigate('Courses Results', {queryText: 'Engineering'})} >
                        <CheckBox checked={this.state.treenuts} color={this.state.treenuts ? checkboxColor : textColor} onPress={() => {
                            this.setState({treenuts: !this.state.treenuts})
                        }}/>
                        <Text>  </Text>
                        <Text style={styles.title1}>Tree Nuts</Text>
                    </View>
                    <View style={styles.toolBox} onPress={() => 
                    this.props.navigation.navigate('Course Results', {queryText: 'Life Sciences'})} >
                        <CheckBox checked={this.state.shellfish} color={this.state.shellfish ? checkboxColor : textColor} onPress={() => {
                            this.setState({shellfish: !this.state.shellfish})
                        }}/>
                        <Text>  </Text>
                        <Text style={styles.title1}>Shellfish</Text>
                    </View>
        </View>
        <View style={{flexDirection: 'row'}}>
                    <View style={styles.toolBox} onPress={() => 
                    this.props.navigation.navigate('Courses Results', {queryText: 'Engineering'})} >
                        <CheckBox checked={this.state.milk} color={this.state.milk ? checkboxColor : textColor} onPress={() => {
                            this.setState({milk: !this.state.milk})
                        }}/>
                        <Text>  </Text>
                        <Text style={styles.title1}>Milk</Text>
                    </View>
                    <View style={styles.toolBox} onPress={() => 
                    this.props.navigation.navigate('Course Results', {queryText: 'Life Sciences'})} >
                        <CheckBox checked={this.state.soy} color={this.state.soy ? checkboxColor : textColor} onPress={() => {
                            this.setState({soy: !this.state.soy})
                        }}/>
                        <Text>  </Text>
                        <Text style={styles.title1}>Soy</Text>
                    </View>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigation.navigate("CameraScreen")}
            >
            <Text style={styles.registerText}>Take Photo</Text>
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigation.navigate("Manual Search")}
            >
            <Text style={styles.loginText}>Input Manually</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}
}

const styles = StyleSheet.create({
  loginText: {
    fontFamily: "Avenir",
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    textAlignVertical: "center",
  },
  loginButton: {
    backgroundColor: "white",
    width: 271,
    height: 65,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#737373",
    justifyContent: "center",
    top: 30,
  },
  registerText: {
    fontFamily: "Avenir",
    fontSize: 20,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    textAlignVertical: "center",
  },
  registerButton: {
    backgroundColor: `${themeColor}`,
    width: 271,
    height: 65,
    borderRadius: 7,
    justifyContent: "center",
  },
  buttonContainer: {
    alignItems: "center",
    flex: 0.3,
    padding: 30,
    top: 30,
  },
  subtext: {
    color: "#5A5A5A",
    fontFamily: "Avenir",
    fontSize: 18,
    textAlign: "center",
    top: 31,
  },
  title: {
    fontFamily: "Avenir",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  textContainer: {
    flex: 0.15,
    padding: 30,
  },
  SVGcontainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    top: 50,
    right: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#F8FAFB",
    alignItems: 'center'
  },
  imageWrapper: {
    width: 200,
    height: 200,
    padding: 10,
    borderColor: '#cf667f',
    borderWidth: 5,
    paddingLeft: 20,
    borderStyle: 'dashed',
    marginTop: 20,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  }, title1: {
    fontSize: 20, color: `${textColor}`, fontWeight: "600", paddingLeft:10
},
  toolBox: {
    alignItems: "center",
    width: (175),
    margin: 8,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    shadowRadius: 10,
    backgroundColor: `${themeColor}`,
    shadowOpacity: 0.1,
    flexDirection: 'row'
}})