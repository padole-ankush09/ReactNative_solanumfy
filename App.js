import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity,StyleSheet} from 'react-native';
import download from './assets/download.png';
import qr from "./assets/qr.png";
//import * as ImagePicker from 'expo-image-picker';
//import * as Permissions from 'expo-permissions';
//import { Camera } from 'expo-camera';
//import Camera from './components/Camera';
//import {Cam} from './components/Cam';
// import screens from './screen/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Predictionscreen from './screen/Predictionscreen';
import Bottomtab from './Nav/Bottomtab';
import Aboutus from './screen/Aboutus';


const  Stack = createStackNavigator();


//export default function App() {

//return(
  class Home extends Component {
   
  


 
    render() {
      return (
        // <Homscreen />
        <NavigationContainer   >
  <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown:false }}>

 <Stack.Screen  name="Bottomtab" component={Bottomtab}  options={{
  headerTintColor: '#1A8766',
  title: '',
  headerTransparent: 'true',
  headerLeft: null,
}} />
<Stack.Screen name="Predictionscreen" component={Predictionscreen} options={{
  headerTintColor: '#1A8766',
  title: '',
  headerTransparent: 'true',
  headerLeft: null,
  
}} />

 <Stack.Screen name="Aboutus" component={Aboutus} options={{
  headerTintColor: '#1A8766',
  title: '',
  headerTransparent: 'true',
  headerLeft: null
}} />


 </Stack.Navigator>
 

 </NavigationContainer>
       


        );
      }
    }
    

export default Home;
    
    
   
            
   

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  rect: {
    top: 90,
    width: 278,
    height: 520,
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderRadius: 35,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 7,
    shadowOpacity: 1,
    shadowRadius: 4,
    left: 28
  },
  rect4: {
    width: 238,
    height: 254,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 27,
    marginTop: 20,
    marginLeft: 20,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 5,
    shadowOpacity: 0.16,
    shadowRadius: 10
  },
  rect1: {
    width: 238,
    height: 160,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 27,
    marginTop: 20,
    marginLeft: 20,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 5,
    shadowOpacity: 0.16,
    shadowRadius: 10
  },
  rect3: {
    top: 550,
    left: -50,
    width: 273,
    height: 245,
    position: 'absolute'
  },
  image3Row: {
    height: 53,
    flexDirection: 'row',
    marginTop: 27,
    marginLeft: 31,
    marginRight: 20
  },
  image3: {
    width: 38,
    height: 39,
    marginTop: 11
  },
  image6: {
    width: 16,
    height: 34,
    marginLeft: 12,
    marginTop: 14
  },
  image4: {
    width: 48,
    height: 48,
    marginLeft: 7,
    marginTop: 3
  },
  image7: {
    width: 16,
    height: 34,
    marginLeft: 1,
    marginTop: 13
  },
  image5: {
    width: 47,
    height: 53,
    marginLeft: 2
  },
//   cameraContainer: {
//     flex: 1,
//     flexDirection: 'row'
// },
// fixedRatio:{
//     flex: 1,
//     aspectRatio: 1
// },
loremIpsum: {
  // fontFamily: 'comicneuebold',
  color: '#195F57',
  fontSize: 20,
  marginTop: 19,
  marginLeft: 34,
  // textAlign:'center',
},
rect2StackStack: {
  width: 440,
  height: 800,
  marginLeft: 13,
  flexDirection:'column',
  marginTop:54,
  // backgroundColor:'#195F57',
},
healYourCrop: {
  // fontFamily: 'comicneuebold',
  color: '#195F57',
  fontSize: 18,
  marginTop: 16,
  marginLeft: 21
},
rect2: {
  top: -40,
  left: 110,
  height: 350,
  position: 'absolute'
},
image2: {
  top: 492,
  left: 260,
  width: 131,
  height: 155,
  position: 'absolute',
},
});

