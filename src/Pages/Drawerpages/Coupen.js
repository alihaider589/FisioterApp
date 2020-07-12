import React, { Component } from 'react'
import ReactNative, { Text, View, StyleSheet, Image, TextInput, StatusBar,TouchableOpacity } from 'react-native'
import { Container, Header, Left, Right, Button } from 'native-base'
import * as Font from 'expo-font'



export default class Coupen extends Component {
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
                <View style={{ marginTop: StatusBar.currentHeight }}>

                    <ReactNative.Text
                        style={{
                            fontSize: 25,
                            fontFamily: 'Bold',
                            color: 'rgb(0, 160, 153)',
                            alignSelf: 'center'
                        }}>
                        COUPON
                        </ReactNative.Text>
                    <ReactNative.Text
                        style={{
                            alignSelf: 'center',
                            color:'rgb(148, 148, 148)',
                            fontFamily:"Medium",
                            fontSize:15,
                            marginTop:'5%',

                        }}>
                        Codice Coupen Personale:
                    </ReactNative.Text>
                    <ReactNative.Text
                        style={{
                            alignSelf: 'center',
                            color:'rgb(148, 148, 148)',
                            fontFamily:"Bold",
                            fontSize:25,
                            marginTop:'5%',

                        }}>
            12fdasufbasf$32
                    </ReactNative.Text>
                </View>
               <TouchableOpacity
               activeOpacity={0.5}
               style={{
                   backgroundColor:'rgb(0, 160, 153)',
                   justifyContent:'center',
               height:'5%',
               width:'30%',
               alignItems:'center',
               borderRadius:5,
               marginTop:'10%',
               
               }}>
<ReactNative.Text
 style={{
fontFamily:'Medium',
color:'white',
fontSize:15,
}}>
    Copia
</ReactNative.Text>
               </TouchableOpacity>
            </Container>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
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