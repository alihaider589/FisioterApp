import React, { Component } from 'react'
import ReactNative, { Text, View, StyleSheet, Image, TextInput,StatusBar,Dimensions } from 'react-native'
import * as Font from 'expo-font'
import {Container} from 'native-base'
import { AntDesign } from '@expo/vector-icons';



export default class login extends Component {
    async componentDidMount() {

        await Font.loadAsync({

            Bold: require('../shared/fonts/Baloo2-Bold.ttf'),
            
            ExtraBold: require('../shared/fonts/Baloo2-ExtraBold.ttf'),
            
            Medium: require('../shared/fonts/Baloo2-Medium.ttf'),
            
            Regular: require('../shared/fonts/Baloo2-Regular.ttf'),
            
            SemiBold: require('../shared/fonts/Baloo2-SemiBold.ttf')
        })
    }
    render() {
        return (
            <Container style={styles.container}>
                <View style={{ alignSelf: 'center' }}>
                    <Image source={require('../shared/logos/fisi.png')} 
                    style={{ height: 125,
                    width: 125,
                    tintColor:'white',
                      marginTop: 10, 
    }} />
                </View>
                <View style={{ marginTop: 20 }}>
                    <TextInput
                        style={[styles.textinputstyle, {}]}
                        placeholder="     Email"
                    />
                    <TextInput
                        style={[styles.textinputstyle, { marginTop: 30 }]}
                        placeholder="     Passworld"
                    />

                </View>

                <ReactNative.Text
                    style={[styles.font,
                    {
                        fontFamily: 'SemiBold',
                        marginTop: 20,
                        fontSize: 20,
                    }]}>
                    Passworld dimeticata?
                        </ReactNative.Text>
                <ReactNative.Text
                    style={[styles.font,
                    {
                        fontFamily: 'ExtraBold',
                        fontSize: 30,
                        marginTop: 30
                    }]}>
                    ENTRA
                          </ReactNative.Text>
                <ReactNative.Text
                    style={[styles.font,
                    {
                        fontFamily: 'SemiBold',
                        fontSize: 20,
                        marginTop: '5%'
                    }]}>
                    NON SEI REGISTRATO?
                      </ReactNative.Text>
                <ReactNative.Text
                    style={[styles.font,
                    {
                        fontFamily: 'ExtraBold',
                        fontSize: 30,
                        marginTop: '10%'
                    }]}>
                    REGISTRATI
                      </ReactNative.Text>
                      <AntDesign name="arrowright" size={40}  color="white" style={{margin:'5%'}} />

            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:StatusBar.currentHeight,
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgb(0, 160, 153)',
        justifyContent: "flex-start",
        alignItems: 'center',


    },
    logo: {

    },
    font: {
        color: 'white',

    },
    textinputstyle: {
        height: 40,
        width: 250,
        fontSize: 20,
        backgroundColor: 'white',
        borderRadius: 6,
        color: 'rgb(171, 171, 171)',
        fontFamily: 'SemiBold',
        alignItems: 'flex-end'
    }

})