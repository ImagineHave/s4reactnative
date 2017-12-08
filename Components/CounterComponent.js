import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, View, Text, Button, TextInput, Image , Keyboard, TouchableWithoutFeedback, Dimensions} from 'react-native';

import RNShakeEvent from 'react-native-shake-event';

export default class CounterApp extends Component {

    
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }

    componentWillMount() {
        RNShakeEvent.addEventListener('shake', () => {
            this.pray();
        });
      }
     
      componentWillUnmount() {
        RNShakeEvent.removeEventListener('shake');
      }

    pray = () => {
        this.props.navigation.navigate('Result', { prayer: this.state.text })
      }

    randomText =  "asdgasdgasd";

    

    randomText = this.prayer ? this.prayer.data.answer.passage : "none"

    render() {


        let windowHeight= Dimensions.get('window').height;
        let windowWidth = Dimensions.get('window').width;
        
        let numberOfBackgroundImages = Math.ceil(windowHeight/windowWidth);

        var images = [];

        for (i = 0; i < numberOfBackgroundImages; i++) {
            images.push(<Image key={i} source={require('../img/bg.jpg')} style = { styles.backgroundImage } />)
        }


        return (

            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

            <View style = {styles.container}>

                <View style = { styles.backgroundImageContainer }>
                    { images }
                </View>
                

                <Image
                    style = { styles.crossImg }
                    source={require('../img/cross.png')}
                />

                <TextInput
                    style={
                        {
                            height: 200, 
                            width: Dimensions.get('window').width - 40, 
                            borderColor: 'gray', borderWidth: 1, 
                            backgroundColor: 'rgba(255,255,255,0.25)', 
                            borderColor: 'rgba(255,255,255,0.25)',
                            textAlignVertical: 'top',
                            paddingTop: 10,
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingBottom: 10
                            
                        }
                    }
                    onChangeText={(text) => this.setState({text})
                }
                    value={this.state.text}
                    underlineColorAndroid="transparent"
                    fontSize={18}
                    multiline = {true}
                />

                <Image 
                    style = { styles.line } 
                    source={require('../img/line.jpg')}
                />

                <TouchableHighlight onPress={this.pray}>
                    <Image
                    source={require('../img/s4j.png')}
                    style = { styles.s4j } />
                </TouchableHighlight>

                

                

 
            </View>
            </TouchableWithoutFeedback>

        );
    }
}

const styles = StyleSheet.create({
    backgroundImageContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    backgroundImage: {
        width: Dimensions.get('window').width,
    },
    crossImg: {
        marginTop: 50,
        marginBottom: 40,
        height: 150,
        width: 200,
        padding: 20,
        resizeMode: 'contain'
    },
    container: {
        flex: 1, 
        alignItems: 'center',
        backgroundColor: '#cccccc',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 50,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        margin: 50,
    },
    shakeButton: {
        backgroundColor: '#000000'
    },
    s4j: {
        marginTop: 20,
        height: 70,
        width: 200,
        // width: Dimensions.get('window').width / 4,
        
        resizeMode: 'contain'
    },
    line: {
        width: Dimensions.get('window').width - 40,
        height: 5
    }
});