import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Dash from './dash'
import Register from './register'
import { View, Text, StyleSheet } from 'react-native';


const Tab = createMaterialTopTabNavigator();


export default class Homes extends Component {
  constructor(props) {
    super(props)
  }
  render() {

    const data = this.props.route.params

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.head}>

        </View>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'white',
            // labelStyle: { fontSize: 32, },
            style: { backgroundColor: '#00314A', color:'white' }
            
          }}
        >

          <Tab.Screen name="Dashboard"  component={Dash} />

          <Tab.Screen name="Request" component={Register} />

        </Tab.Navigator>
      </View>

    );
  }


}

const styles = StyleSheet.create({
  head: {
    borderWidth: 1,
    height: 70,
    backgroundColor: '#00314A'
  }
})