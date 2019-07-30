import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
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
        top: "30%",
        left: "50%",
        zIndex: 200,
        width: Dimensions.get('window').width * .35,
        height: Dimensions.get('window').width * .40,
        color: "red",
        minWidth: 50
    }
});

export default Marker