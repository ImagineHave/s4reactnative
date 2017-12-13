import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, View, Text, Button, TextInput, Image , Keyboard, TouchableWithoutFeedback, Dimensions} from 'react-native';

import * as actions from '../actions';
import { connect } from 'react-redux';

import { Font } from 'expo';

import {NavigationActions} from 'react-navigation';

import * as Animatable from 'react-native-animatable';

class ResultComponent extends Component {

    async componentDidMount() {
        await Font.loadAsync({
            'robotoSlab-bold': require('../fonts/RobotoSlab-Bold.ttf'),
          });
      
          this.setState({ fontLoaded: true });
    }

    constructor(props) {
        super(props);
        this.state = { 
            fontLoaded: false
        };
    }
    

    backButton = () => {
        this.props.navigation.dispatch(NavigationActions.back());
    }

    
    render() {


        let windowHeight= Dimensions.get('window').height;
        let windowWidth = Dimensions.get('window').width;
        
        let numberOfBackgroundImages = Math.ceil(windowHeight/windowWidth);

        var images = [];

        for (i = 0; i < numberOfBackgroundImages; i++) {
            images.push(<Image key={i} source={require('../img/bg2.jpg')} style = { {
                height: windowWidth,
                width: windowWidth
            } } />)
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

                

                
                

                    <Image 
                        source={require('../img/line2.jpg')}
                        style = {styles.line}
                    /> 

{
    this.state.fontLoaded ? (
                    <Text style={styles.result}> 
                    {
                        this.props.prayer.isFetching && <Text>Loading</Text>
                    }

                    {
                        this.props.prayer.data.length ? <Text>{ this.props.prayer.data[0].passage.toUpperCase() }</Text> : null
                    }


                    </Text>
    ) : null
}

                    

                    <Image 
                        source={require('../img/line2.jpg')}
                        style = {styles.line}
                    /> 


                    <Button style = { styles.backButton } onPress={this.backButton} title="Pray again">
                   
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
        fontSize: 30,
        lineHeight: 30,
        backgroundColor: 'rgba(0,0,0,0)',
        fontFamily: 'robotoSlab-bold',
        color: '#006FB3',
        textAlign: 'justify'
    },
    backButton: {
        marginTop: 40
    }
});


function mapStateToProps(state) {
    return {
        prayer: state.prayer
    };
}

export default connect(mapStateToProps, actions)(ResultComponent);
