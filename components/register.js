import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, ScrollView, TextInput } from 'react-native';
import Swiper from 'react-native-web-swiper';



export default class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            animi1: new Animated.Value(-100),
            animi2: new Animated.Value(700),
            reg_data:'',
            loading:false,
            fname:'',
            lname:'',
            phone:'',
            dist:'',
            email:'',
            pass:'',
            cpass:''
        }
    }


     







    componentDidMount() {
        this.shift()
    }


     reg_user = () =>{
        
        this.setState({loading:true},()=>{

            fetch('http://ttgdata.brichghana.com/passbook/route.php?func=fetchDetail',{
                method:'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                     name:this.props.data.name
                })
      
               }).then((res)=>res.json()).then((resJson)=>{

                      

                      this.setState({data:resJson});

               })

        })

     }

     

    shift = () => {

        Animated.spring(this.state.animi1, {
            toValue: 20,
            bounciness: 30,
            useNativeDriver: false
        }).start()

        Animated.spring(this.state.animi2, {
            toValue: 20,
            bounciness: 15,
            duration: 800,
            useNativeDriver: false
        }).start()


    }


    render() {
        return (
            <View style={styles.container}>
                <Animated.Text style={{
                    marginTop: 50,
                    fontWeight: 'bold',
                    fontSize: 30,
                    marginLeft: this.state.animi1,
                    color: 'white'
                }}>Register</Animated.Text>

                <Animated.View style={{
                    backgroundColor: 'white',
                    width: '100%',
                    height: 800,
                    marginTop: 40,
                    borderTopRightRadius: 50,
                    borderTopLeftRadius: 50,
                    marginTop: this.state.animi2
                }}>
                    <View style={styles.tab}></View>
                    <ScrollView>
                        <View>
                            <TextInput
                                style={styles.inp}
                                placeholder={'First Name...'}
                                onChangeText={() => { }}
                                placeholderTextColor='rgb(11, 156, 71)'

                            />
                            <TextInput
                                style={styles.inp}
                                placeholder={'Last Name...'}
                                onChangeText={() => { }}
                                placeholderTextColor='rgb(11, 156, 71)'

                            />
                            <TextInput
                                style={styles.inp}
                                placeholder={'Phone...'}
                                onChangeText={() => { }}
                                placeholderTextColor='rgb(11, 156, 71)'

                            />
                            <TextInput
                                style={styles.inp}
                                placeholder={'District...'}
                                onChangeText={() => { }}
                                placeholderTextColor='rgb(11, 156, 71)'

                            />
                            <TextInput
                                style={styles.inp}
                                placeholder={'Email...'}
                                onChangeText={() => { }}
                                placeholderTextColor='rgb(11, 156, 71)'

                            />
                            <TextInput
                                style={styles.inp}
                                placeholder={'Password...'}
                                onChangeText={() => { }}
                                placeholderTextColor='rgb(11, 156, 71)'

                            />
                            <TextInput
                                style={styles.inp}
                                placeholder={'Verify Password...'}
                                placeholderTextColor='red'
                                onChangeText={() => { }}
                                placeholderTextColor='rgb(11, 156, 71)'

                            />
                            <TouchableOpacity style={styles.agg} onPress={() => this.props.navigation.navigate('Register')}>
                                <Text style={styles.aggtxt}>REGISTER</Text>
                            </TouchableOpacity>
                            <View style={{ height: 350, width: '100%' }}>

                            </View>
                        </View>
                    </ScrollView>
                </Animated.View>
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
        width:'85%',
        height:50,
        alignSelf:'center',
        marginTop:20,
        borderRadius:60,
        textAlign:'center'
    },
    inp: {
        //  borderWidth:1,
        width: '85%',
        alignSelf: 'center',
        padding: 10,
        height: 50,
        marginTop: 20,
        borderRadius: 40,
        backgroundColor: '#C5F8EB',
        paddingLeft: 30,
        fontSize: 18,
        color: 'black',
    },
    tab: {
        height: 10,
        width: 100,
        backgroundColor: '#00314A',
        marginTop: 10,
        alignSelf: 'center',
        borderRadius: 10
    },
    regbox: {
        backgroundColor: 'white',
        width: '100%',
        height: 800,
        marginTop: 50,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
    },
    container: {
        flex: 1,
        backgroundColor: '#00314A'
    },

});