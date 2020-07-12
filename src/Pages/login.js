import React, { Component } from 'react'
import ReactNative, { Text, View, StyleSheet, Image, TextInput } from 'react-native'
import * as Font from 'expo-font'

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
            <View style={styles.container}>
                <View style={{ alignSelf: 'center' }}>
                    <Image source={require('../shared/logos/fisi.png')} style={{ height: 125, width: 125, marginTop: '10%', backgroundColor: 'red' }} />
                </View>
                <View style={{ marginTop: 20 }}>
                    <TextInput
                        style={[styles.textinputstyle, {}]}
                        placeholder="     Email"
                    />
                    <TextInput
                        style={[styles.textinputstyle, { marginTop: "15%" }]}
                        placeholder="     Passworld"
                    />

                </View>

                <ReactNative.Text
                    style={[styles.font,
                    {
                        fontFamily: 'SemiBold',
                        marginTop: '10%',
                        fontSize: 20,
                    }]}>
                    Passworld dimeticata?
                        </ReactNative.Text>
                <ReactNative.Text
                    style={[styles.font,
                    {
                        fontFamily: 'ExtraBold',
                        fontSize: 30,
                        marginTop: '10%'
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