import React, { Component } from 'react'
import ReactNative, { Text, View, StyleSheet, Image, TextInput, StatusBar } from 'react-native'
import { Container, Header, Left, Right } from 'native-base'
import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font'


export default class Invite extends Component {
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
                <View style={{ marginTop: '5%' }}>

                    <ReactNative.Text

                        style={{
                            fontFamily: 'Bold',
                            fontSize: 25,
                            color: "rgb(0, 160, 153)",
                            alignSelf: "center"
                        }}>Invita
</ReactNative.Text>

                    <View style={{ marginTop: '10%' }}>
                        <View style={{ alignItems: 'center' }}>
                            <ReactNative.Text style={{ fontFamily: 'Bold', fontSize: 20, color: 'rgb(148, 148, 148)' }}>INVITA PAZIENTI</ReactNative.Text>
                            <FontAwesome name="envelope" size={50} color="rgb(0, 160, 153)" style={{ marginTop: '10%', }} />

                        </View>
                        <Text style={{ color: 'rgb(171, 171, 171)', marginTop: '20%' }}>_________________________________</Text>
                        <View style={{ alignItems: 'center', marginTop: '15%' }}>
                            <ReactNative.Text style={{ fontFamily: 'Bold', fontSize: 20, color: 'rgb(148, 148, 148)' }}>INVITA TERAPISTI</ReactNative.Text>
                            <FontAwesome name="envelope" size={50} color="rgb(0, 160, 153)" style={{ marginTop: '10%', }} />

                        </View>
                    </View>
                </View>
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