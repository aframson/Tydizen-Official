import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Intro from './components/intro'


export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      showSlides: true,
      is_new:true
    }


  }

 

  render() {

         if(this.state.is_new){

          return(

              <Intro/>

          )
         }else{

         }
       
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16
  }
});
