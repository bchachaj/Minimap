import React from 'react'
import { View, Text, StyleSheet, Image, } from 'react-native'
import { IconButton, Colors } from 'react-native-paper';

import image from './../../../static/my_location.png';

const Marker = () => {
    return (
        <View style={styles.markerPosTest}>
            {/* <IconButton
                icon="location-on"
                color={Colors.red500}
                size={30}
                onPress={() => console.log('Pressed')}
            /> */}
            <Image
                style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
                source={image}  
            />
        </View>
    )
}


var styles = StyleSheet.create({

    markerPosTest: {
        position: "absolute",
        backgroundColor: 'blue',
        top: "30%",
        left: "50%",
        zIndex: 200,
        width: "15%",
        height: "15%",
        color: "red",
        // padding: 100,
        minWidth: 200
    }
});

export default Marker