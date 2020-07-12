import React, { Component } from 'react'
import ReactNative, { Text, View, StyleSheet, Image, TextInput, StatusBar } from 'react-native'
import { Container, Header, Left, Right } from 'native-base'
import * as Font from 'expo-font'
import { AntDesign,EvilIcons,Entypo} from '@expo/vector-icons'

export default class Sociale extends Component {
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
            <Container style={styles.container}>
                <View style={{ marginTop: '10%' }}>
                    <ReactNative.Text style={{
                        fontSize: 25,
                        fontFamily: 'Bold',
                        color: 'rgb(0, 160, 153)'
                    }}>
                        SOCIAL E CONTATTI
</ReactNative.Text>
                </View>
                <View style={{ marginTop: '10%' }}>
                    <ReactNative.Text
                        style={{
                            color:'rgb(148, 148, 148)',
                            fontFamily:'Medium',
                            fontSize:20
                        }}
                    >Numero di telefono:</ReactNative.Text>
                    <ReactNative.Text
                    style={{
                        color:'rgb(148, 148, 148)',
                        fontFamily:'Bold',
                        fontSize:20,
                    }}
                    >+31 242 154125</ReactNative.Text>


<ReactNative.Text
                        style={{
                            color:'rgb(148, 148, 148)',
                            fontFamily:'Medium',
                            fontSize:20
                        }}
                    >email:</ReactNative.Text>
                    <ReactNative.Text
                    style={{
                        color:'rgb(148, 148, 148)',
                        fontFamily:'Bold',
                        fontSize:20,
                    }}
                    >fisioterapp@gmail.it</ReactNative.Text>
   <ReactNative.Text
                        style={{
                            color:'rgb(148, 148, 148)',
                            fontFamily:'Medium',
                            fontSize:20
                        }}
                    >Website:</ReactNative.Text>
                    <ReactNative.Text
                    style={{
                        color:'rgb(148, 148, 148)',
                        fontFamily:'Bold',
                        fontSize:20,
                    }}
                    >www.fisioterapp.it</ReactNative.Text>

                </View>
                <View style={{flexDirection:"row",marginTop:'10%'}}>
                <AntDesign name="instagram" size={45} color="rgb(0, 160, 153)" style={{margin:10}} />
                <EvilIcons name="sc-facebook" size={55} color="rgb(0, 160, 153)"style={{margin:10}} />
                <Entypo name="youtube" size={45} color="rgb(0, 160, 153)" style={{margin:10}}/>
                </View>
            </Container>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgb(246, 246, 246)',
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