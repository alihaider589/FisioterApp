import React, { Component } from 'react'
import ReactNative, { Text, View, StyleSheet, Image, TextInput } from 'react-native'
import * as Font from 'expo-font'


export default class Register1 extends Component {
        async componentDidMount() {
        await Font.loadAsync({
            Bold: require('../../shared/fonts/Baloo2-Bold.ttf'),
            ExtraBold: require('../../shared/fonts/Baloo2-ExtraBold.ttf'),
            Medium: require('../../shared/fonts/Baloo2-Medium.ttf'),
            Regular: require('../../shared/fonts/Baloo2-Regular.ttf'),
            SemiBold: require('../../shared/fonts/Baloo2-SemiBold.ttf')
        })  
    }
    render() {
        return (
            <View style={styles.container}>
{/* <Image source={require('./')} /> */}
        </View>    
           )
    }
}


const styles = StyleSheet.create({
    container: {
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