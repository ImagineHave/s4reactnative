import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, View, Text, Button, TextInput, Image , Keyboard, TouchableWithoutFeedback, Dimensions} from 'react-native';
import { connect } from 'react-redux';
import {NavigationActions} from 'react-navigation';
import axios from 'axios'

import * as Actions from './Actions/ActionTypes';
import RNShakeEvent from 'react-native-shake-event';

class Result extends Component {

    
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        this.props.fetchPrayer(this.props.navigation.state.params.prayer);
    }

    pray = () => {
        this.props.navigation.dispatch(NavigationActions.back());
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

                

                
                

                    <Image 
                        source={require('./img/line.jpg')}
                        style = {styles.line}
                    /> 
                    <Text style={styles.result}> 
                        { this.props.prayer }
                    </Text>
                    <Image 
                        source={require('./img/line.jpg')}
                        style = {styles.line}
                    /> 


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
        height: 5,
        marginLeft: 20,
        marginRight: 20
    },
    result: {
        marginTop:20,
        marginBottom:20,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 25,
        backgroundColor: 'rgba(0,0,0,0)'
    }
});

const mapStateToProps = (state) => ({
    prayer: state.counterReducer.prayer,
    prayerLoading: state.counterReducer.prayerLoading
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({type: Actions.COUNTER_INCREMENT}),
    decrement: () => dispatch({type: Actions.COUNTER_DECREMENT}),
    
    fetchPrayer: (text) => dispatch({
        type: Actions.FETCH_PRAYER, 
        payload: 
             axios({
                method: 'post',
                url: 'https://django4j.imagine-have.xyz/s4j/p/',
                data: {
                    prayer: text
                },
                timeout: 5000
            }).then(function(response) {
                console.log(response)
                dispatch({
                    type: Actions.RECEIVE_PRAYER, 
                    payload: response.data.answer.passage
                });
            }).catch(function(error) {
                console.log(error);
            })
        
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Result)
