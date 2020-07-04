import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';


export default class Welcome extends Component {
  constructor(props){
    super(props);
    this.state={
     
    }


  }



  render() {
          return(
   
              <View style={styles.container}>

                  <Text style={styles.greet}>Welcome to tydizen</Text>
                  <Image  style={styles.imglogo}source={require('../assets/icon.png')}/>
                  <Image  style={styles.imglogo2}source={require('../assets/Tydizen.png')}/>

                  <Text style={{color:'gray',alignSelf:'center',textAlign:'center',marginTop:50,width:300}}>
                   Read our <Text style={styles.hash}>Privacy Policy</Text>. Tap " Agree and continue " to accept the 
                  <Text style={styles.hash} >Terms of Service</Text>
                  </Text>

                     
                     <TouchableOpacity style={styles.agg} onPress={()=>this.props.navigation.navigate('Welcome')}>
                         <Text style={styles.aggtxt}>AGREE AND CONTINUE</Text>
                     </TouchableOpacity>

              </View>

          )
  }

}
const styles = StyleSheet.create({
  aggtxt:{
      textAlign:'center',
       fontSize:14,
       fontWeight:'bold',
       color:'white',
       marginTop:7
  },
  agg:{
      padding:10,
      backgroundColor:'#01A886',
      width:250,
      height:50,
      alignSelf:'center',
      marginTop:20,
      borderRadius:60,
      textAlign:'center'
  },
  hash:{
     color:'#0099FF'
  },
    imglogo:{
      height:150,
      width:150,
      alignSelf:'center',
      marginTop:100
    },
    imglogo2:{
      
      alignSelf:'center',
      marginTop:10
    },
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  greet: {
       alignSelf:'center',
       fontSize:24,
       marginTop:50,
       color:'#01A886',
       fontWeight:'bold'
  }
});
