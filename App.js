import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator, MaterialBottomTabView } from '@react-navigation/material-bottom-tabs';
import LoginScreen from'./screens/LoginScreen'
import HomeScreen from'./screens/foodallergendetector/HomeScreen'
import {MaterialIcons ,Ionicons, Octicons, Entypo, MaterialCommunityIcons, FontAwesome5} from '@expo/vector-icons'
import  {Button, Alert, StatusBar} from 'react-native'
import RegisterScreen from './screens/RegisterScreen'
import ResultsScreen from './screens/foodallergendetector/ResultsScreen'
import ProceduresScreen from './screens/procedures/ProceduresScreen'
import ManualSearchScreen from './screens/foodallergendetector/ManualSearchScreen'
import HealthAdviceScreen from './screens/airallergendetector/HealthAdviceScreen'
import PollutionHMScreen from './screens/airallergendetector/PollutionHMScreen'
import CurrentPollenScreen from './screens/airallergendetector/CurrentPollenScreen'
import PollenHMScreen from './screens/airallergendetector/PollenHMScreen'
import AQHMScreen from './screens/airallergendetector/AQHMScreen'

import AirQualityForecastsNavigatorScreen from './screens/airallergendetector/AirQualityForecastsNavigator'
import CurrentAQIScreen from './screens/airallergendetector/CurrentAQIScreen'
import Firebasekeys from './config'
import * as firebase from 'firebase'

import 'firebase/firestore';

const themecolor = '#fff'
const tabcolor = '#FF5757'
const Tab = createMaterialBottomTabNavigator();
const Auth = createStackNavigator();
const ProceduresStack = createStackNavigator()
const ManualStack = createStackNavigator()
const AQFStack = createStackNavigator()
const HomeStack = createStackNavigator()

let firebaseConfig = Firebasekeys
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
let user = firebase.auth().currentUser
const db = firebase.firestore()

signOutUser = () => {
  firebase.auth().signOut()
}
function HomeSection({navigation}) {
  return (
    <HomeStack.Navigator initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: `${tabcolor}`,
      },
      
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: `${themecolor}`
      },
    }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen}
        options={{
          headerTitle: "Home",
        }}
      />
      <ManualStack.Screen name="Manual Search" component={ManualSearchScreen}
        options={{
          headerTitle: "Home",
        }}
      />  
      <HomeStack.Screen name="Results Screen" component={ResultsScreen}
        options={{
          headerTitle: "Results Screen",
        }}
      />  
    </HomeStack.Navigator>
  );
}
function ProceduresSection() {
  return (
    <ProceduresStack.Navigator initialRouteName="Procedures Screen"
    screenOptions={{
      headerStyle: {
        backgroundColor: `${tabcolor}`,
      },
      
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: `${themecolor}`
      },
    }}
    >
      <ProceduresStack.Screen name="Procedures Screen" component={ProceduresScreen}
        options={{
          headerTitle: "Procedures",
        }}
      />
    </ProceduresStack.Navigator>
  );
}
function AQFSection() {
  return (
    <AQFStack.Navigator initialRouteName="Air Quality Forecasts"
    screenOptions={{
      headerStyle: {
        backgroundColor: `${tabcolor}`,
      },
      
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: `${themecolor}`
      },
    }}
    >
      <AQFStack.Screen name="Procedures Screen" component={AirQualityForecastsNavigatorScreen}
        options={{
          headerTitle: "Air Quality Forecasts",
        }}
      />
      <AQFStack.Screen name="Current AQI" component={CurrentAQIScreen}
        options={{
          headerTitle: "Air Quality Index",
        }}
      />
      <AQFStack.Screen name="Pollen Heatmap" component={PollenHMScreen}
        options={{
          headerTitle: "Pollen HM",
        }}
      />
      <AQFStack.Screen name="Pollution Heatmap" component={PollutionHMScreen}
        options={{
          headerTitle: "Traffic Pollution Heat Map",
        }}
      />
      <AQFStack.Screen name="AQ Heatmap" component={AQHMScreen}
        options={{
          headerTitle: "Air Quality Heat Map",
        }}
      />
      <AQFStack.Screen name="Health Advice" component={HealthAdviceScreen}
        options={{
          headerTitle: "Health Advice",
        }}
      />
      <AQFStack.Screen name="Current Pollen" component={CurrentPollenScreen}
        options={{
          headerTitle: "Current Pollen",
        }}
      />

    </AQFStack.Navigator>
  );
}
function checkForUser(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
     console.log('user is signed in')
     let signedIn = true;
     return true
    } else {
     console.log('user is not signed in')
     let signedIn = false;
    return false
    }
  });
}
function MainTabs(){
  return(
  <Tab.Navigator
          initialRouteName="Home"
          sceneAnimationEnabled="true"
          activeColor={themecolor}
          inactiveColor={themecolor}
          barStyle={{ backgroundColor: `${tabcolor}` }}
          
        >
          <Tab.Screen name="Home" component={HomeSection} 
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="ios-home" size={24} color={themecolor} />
            ),
          }}
          />

          <Tab.Screen name="Air Allergy" component={AQFSection} 
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="air-filter" size={24} color={themecolor} />
            ),
          }}
          />
          <Tab.Screen name="Procedures" component={ProceduresSection} 
          options={{
            tabBarIcon: ({color}) => (
              <FontAwesome5 name="tasks" size={24} color={themecolor} />
            ),
          }}
          />
        </Tab.Navigator>)
}
function MainAuthNavigator(){
  return(
  <Auth.Navigator 
  initialRouteName="Login"
  screenOptions={{
    headerShown: false
  }}
  >
    <Auth.Screen name="Login" component={LoginScreen}
      options={{
        headerTitle: "Complaint Form Submission",

      }}
    />
    <Auth.Screen name="Register" component={RegisterScreen}
      options={{
        headerTitle: "Complaint Form Submission",

      }}
     />
     {/* <Auth.Screen name="MainTabs" component={MainTabs}
       options={{
         headerTitle: "Complaint Form Submission",

       }}
    /> */}
  </Auth.Navigator>)
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(authUser => {
      if (authUser) {
        return setIsLoggedIn(true)
      } else if(!authUser){
        return setIsLoggedIn(false)
      }
    })
  }, [])

    return (
      <NavigationContainer>
         {/* {isLoggedIn === true ? <MainTabs/> : <MainAuthNavigator />} */}
         <MainTabs/>
      </NavigationContainer>
    )
}