import React, { Component } from 'react'
import ReactNative, { Text, View, StyleSheet, Image, TextInput, StatusBar } from 'react-native'
import { Container, Header, Left, Right } from 'native-base'
import * as Font from 'expo-font'


export default class Pagament extends Component {
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
                <View style={{ width: '100%', marginTop: 15 }}>
                    <ReactNative.Text style={{ fontSize: 20, fontFamily: 'Bold', alignSelf: 'center', color: 'rgb(0, 160, 153)' }}>PAGAMENTI</ReactNative.Text>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: 35, marginTop: 15 }}>
                    <View style={{ width: '50%' }}>
                        <ReactNative.Text style={{ fontSize: 20, fontFamily: 'Bold', color: 'rgb(0, 160, 153)' }}>
                            {`GUADAGNO TERAPISTA`}
                        </ReactNative.Text>
                    </View>
                    <View style={{ width: '50%', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                        <ReactNative.Text style={{ fontSize: 30, fontFamily: "ExtraBold", alignSelf: 'flex-end', color: "rgb(148, 148, 148)" }}>
                            13 €
</ReactNative.Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: 35, marginTop: 10 }}>
                    <View style={{ width: '50%' }}>
                        <ReactNative.Text style={{ fontSize: 20, fontFamily: 'Bold', color: 'rgb(0, 160, 153)' }}>
                            {`GUADAGNO TERAPISTA`}
                        </ReactNative.Text>
                    </View>
                    <View style={{ width: '50%', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                        <ReactNative.Text style={{ fontSize: 30, fontFamily: "ExtraBold", alignSelf: 'flex-end', color: "rgb(148, 148, 148)" }}>
                            13 €
</ReactNative.Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: 35, marginTop: 10, alignItems: 'center', justifyContent: "center" }}>
                    <View style={{ alignItems: 'center' }}>
                        <ReactNative.Text style={{ fontSize: 50, fontFamily: 'ExtraBold', color: 'rgb(148, 148, 148)', }}>
                            =
                        </ReactNative.Text>
                    </View>
                    <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                        <ReactNative.Text style={{ fontSize: 50, fontFamily: "ExtraBold", alignSelf: 'center', color: "rgb(0, 160, 153)" }}>
                            {`   41 €`}
                        </ReactNative.Text>
                    </View>
                </View>
<View style={{width:'100%',paddingHorizontal:25}}>
    <ReactNative.Text style={{fontFamily:"Regular",fontSize:15,color:'rgb(148, 148, 148)'}}>
Prossimo Pagamento: 
    </ReactNative.Text>
    <ReactNative.Text style={{fontFamily:"Bold",fontSize:15,color:'rgb(148, 148, 148)'}}>
AI raggiungimento di €
    </ReactNative.Text>
</View>
<View style={{width:'100%',paddingHorizontal:25,marginTop:10}}>
    <ReactNative.Text style={{fontFamily:"Regular",fontSize:15,color:'rgb(148, 148, 148)'}}>
        METODI DI PAGAMENTO: 
    </ReactNative.Text>
</View>
<View style={{width:'100%',paddingHorizontal:25,alignItems:'center',justifyContent:'center',marginTop:10}}>
<Image source={{uri:'https://www.ligo.co.uk/wordpress/wp-content/uploads/2008/09/paypal_feature-452x250.jpg'}}  style={{height:75,width:150,}} />
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
        padding: 10


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