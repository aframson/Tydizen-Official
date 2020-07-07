import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from './slider';
import Welcome from './welcome';
import Register from './register';
import Home from './home';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


export default class Intro extends Component {
 
  

  render() {
          return(
            <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home"     component={Home}      options={{headerShown:false}} />
              <Stack.Screen name="Hi"       component={Welcome}   options={{headerShown:false}} />
              <Stack.Screen name="Welcome"  component={Slider}    options={{headerShown:false}} />
              <Stack.Screen name="Register" component={Register}  options={{headerShown:false}} />

            </Stack.Navigator>
          </NavigationContainer>
          )
  }

}
