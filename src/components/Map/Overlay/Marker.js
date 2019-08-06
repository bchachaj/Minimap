import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableHighlight } from 'react-native'
import { IconButton, Colors } from 'react-native-paper';

import image from './../../../static/my_location.png';

const Marker = (props) => {

    // props: 
    // x:
    // y: 
    // time: 
    // eta: 
    // active: 
    // // userId 
    // name: 
    // description: 
    markerTouchEvent = () => {
        console.log('call active handler from map')
    }


    const { posX, posY, is_active } = props;
    // 
    const dynamicStyles = {
        markerStateStyle: {
            top: `${posY}%`,
            left: `${posX}%`,
            position: "absolute",
            zIndex: 200,
            width: Dimensions.get('window').width * .35,
            height: Dimensions.get('window').width * .40,
        }
    }

    console.log(dynamicStyles.markerStateStyle)

    return (
        <View style={dynamicStyles.markerStateStyle}>
            <TouchableHighlight 
                style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
                onPress={this.markerTouchEvent}>
                <Image
                    style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
                    source={image}
                />
            </TouchableHighlight >
        </View>
    )
}


var staticStyles = StyleSheet.create({
    markerStyles: {
        position: "absolute",
        zIndex: 200,
        width: Dimensions.get('window').width * .35,
        height: Dimensions.get('window').width * .40,
        borderWidth: 1
    }
});

export default Marker