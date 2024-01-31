import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import Predictionscreen from './screen/Predictionscreen';
import Aboutus from '../screen/Aboutus';
import Homscreen from '../screen/Homscreen';
import { Ionicons } from '@expo/vector-icons';

import TabBarIcon from '../components/TabBarIcon';
import TabBarLabel from '../components/TabBarLabel';
import Colors from '../components/Colors';

const  Tab = createBottomTabNavigator();

export default Bottomtab = ({ navigation ,route }) => {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });
 
  return (
   
   
    <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown:false }}>
   
    <Tab.Screen name="Home" component={Homscreen} options={{
      tabBarLabel: ({ focused }) => (
        <TabBarLabel focused={focused} name='Home' />
      ),
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name='md-home' />
      )
    
    // }}
      // TabBarIcon: ({ focused }) => {
       
    //       <Ionicons  name='md-home' size={24} color="black"/>
       
    // // }
    }}
 
  />
   
    <Tab.Screen name="About" component={Aboutus} options={{ 
      tabBarLabel: ({ focused }) => (
        <TabBarLabel focused={focused} name='About' />
      ),
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name='information-circle-sharp' />
      )
    }}
      />
   
   
   </Tab.Navigator>
    
   
   
   
  );




// export default Bottomtab
function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ??
    "Home";

  switch (routeName) {
    case 'Home':
      return '';
    // case 'Prediction screen':
    //   return '';
    case 'About':
      return '';
  }
}
}

const styles = StyleSheet.create({})