import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, View, Text, Button, TextInput, Image , Keyboard, TouchableWithoutFeedback, Dimensions} from 'react-native';

import RNShakeEvent from 'react-native-shake-event';

export default class Result extends Component {

    
    constructor(props) {
        super(props);
        
    }

    pray = () => {
        this.props.navigation.navigate('Home')
      }

    
    render() {


        let windowHeight= Dimensions.get('window').height;
        let windowWidth = Dimensions.get('window').width;
        
        let numberOfBackgroundImages = Math.ceil(windowHeight/windowWidth);

        var images = [];

        for (i = 0; i < numberOfBackgroundImages; i++) {
            images.push(<Image key={i} source={require('./img/bg.jpg')} style = { styles.backgroundImage } />)
        }


        return (

            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

            <View style = {styles.container}>

                <View style = { styles.backgroundImageContainer }>
                    { images }
                </View>
                

                <Image
                    style = { styles.crossImg }
                    source={require('./img/cross.png')}
                />

                

                
                

                
                    <Text> 
                        { this.props.prayer }
                    </Text>


                    <Button onPress={this.pray} title="Pray again">
                   
                </Button>

                


 
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