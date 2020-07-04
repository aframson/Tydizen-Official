import React from 'react';
import { StyleSheet, Text, View, Image ,TouchableOpacity} from 'react-native';
import Swiper from 'react-native-web-swiper';



export default class Slider extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper>
          <View style={[styles.slideContainer, styles.slide1]}>
            <Image style={styles.sli} source={require('../assets/s1.png')} />

            <Text style={styles.tp}>Tydizen</Text>
            <Text style={styles.tpp}>
              Hi there, you are a <Text style={{ color: '#73FF73' }}>Citizen</Text> who keeps
              the environment <Text style={{ color: '#73FF73' }}>Tidy</Text>. Let's contribute
              to making the world a better place. 
            </Text>
          </View>
          <View style={[styles.slideContainer, styles.slide2]}>
            <Image style={styles.slix} source={require('../assets/s2.png')} />

            <Text style={styles.tp}>Tydizen</Text>
            <Text style={styles.tpp}>
              It's Simple, just use the App to take pictures of
              public waste or any other problem, by
              clicking on the <Text style={{ color: '#73FF73' }}>Report button.</Text>
            </Text>
          </View>
          <View style={[styles.slideContainer, styles.slide3]}>
            <Image style={styles.slixx} source={require('../assets/s3.png')} />

            <Text style={styles.tp}>Tydizen</Text>
            <Text style={styles.tpp}>
              An interactive platform for <Text style={{ color: '#73FF73' }}>constituents</Text> and
              their <Text style={{ color: '#73FF73' }}>heads</Text> to share important issues on
              Sanitation and Development
            </Text>
            <TouchableOpacity style={styles.agg} onPress={()=>this.props.navigation.navigate('Register')}>
                      <Text style={styles.aggtxt}>START</Text>
            </TouchableOpacity>
          </View>
        </Swiper>
      </View>
    );
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
  tpp: {
    marginTop: 50,
    width: 250,
    color: 'white',
    textAlign: 'center'
  },
  tp: {
    marginTop: 50,
    fontSize: 19,
    color: 'white',
    fontWeight: 'bold'
  },
  sli: {
    height: 180,
    width: 170,
    marginTop: 80
  },
  slix: {
    height: 200,
    width: 170,
    marginTop: 80
  },
  slixx: {
    height: 170,
    width: 190,
    marginTop: 80
  },
  container: {
    flex: 1,
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  slide1: {
    backgroundColor: '#00314A',
  },
  slide2: {
    backgroundColor: '#00314A',

  },
  slide3: {
    backgroundColor: '#00314A',

  },
});