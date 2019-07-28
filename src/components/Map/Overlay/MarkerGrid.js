import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class MarkerGrid extends Component {
    state = {
        markers: []
    }


    render() {
        return (
            <View style={styles.overlayTest}>
                <Text style={styles.markerPosTest}> textInComponent </Text>
            </View>
        )
    }
}



var styles = StyleSheet.create({
    overlayTest: {
        zIndex: 100,
        backgroundColor: "#fff",
        opacity: 0.5,
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0
    },
    markerPosTest: {
        position: "absolute",
        top: "30%",
        left: "50%",
        zIndex: 101,
        width: "5%",   
        height: "5%",
        backgroundColor: "blue",
        color: "red"
    } 
});