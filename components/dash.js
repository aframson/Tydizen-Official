
import React from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import { Camera, Permissions } from 'expo-camera';





export default class Dash extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            switchValue: false,
            hasCameraPermission: null, //Permission value
            type: Camera.Constants.Type.back, //specifying app start with back camera.
        };
    }


    

    async componentDidMount() {
        //Getting Permission result from app details.
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });

    }

   


    snap = async () => {
        if (this.camera) {
          let photo = await this.camera.takePictureAsync();
          console.log(photo);
        }
      };

    cameraChange = () => {
        this.setState({
          type:
            this.state.type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
        });
      };   

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return (
                <View>
                    <Text>No access to camera</Text>
                </View>
            );  
        } else {

            return (
                <View style={styles.container}>
                    <View style={styles.switchview}>
                        <Text>Show camera</Text>
                        // Create switch component and change switch value when clicking
                        <Switch
                            onValueChange={value => {
                                this.setState({ switchValue: value });
                            }}
                            value={this.state.switchValue}
                            style={styles.switch}
                        />
                    </View>
                    // Checking condition and render correspondingly 
                    {this.state.switchValue ? (
                        <View style={styles.cameraview}>
                            <Text>Camera on</Text>
                        </View>
                    ) : (
                            <View style={styles.cameraview}>
                                <Camera ref={ref => { this.camera = ref; }} style={styles.camera} type={this.state.type}>

                                
                                    <View style={styles.camerabuttonview}>
                                        <TouchableOpacity
                                            style={styles.cameraButtons}
                                            onPress={this.cameraChange}
                                        >
                                            <Text
                                                style={{ fontSize: 18, marginBottom: 10, color: "white" }}
                                            >
                                                Flip
    </Text>
                                        </TouchableOpacity>
                                    </View>
                                </Camera>
                            </View>
                        )}

                </View>
            );
        }
    }
}
const styles = StyleSheet.create({

});
