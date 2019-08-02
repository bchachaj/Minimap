import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Marker from './Marker';

//stub data - delete 
const markers = require('./markers.json');

export default class MarkerGrid extends Component {
    state = {
        markers: []
    };

    componentDidMount() {
        this.setState({ markers: markers.markers });
    }

    placeMarker(e) {
        console.log(`place marker at ${e.nativeEvent.locationX}, ${e.nativeEvent.locationY}`)
        // need to calculate marker X+y by calculating image width by event coordinates to give percentage.
        
   }

    render() {
        let markerComponents; 

        if(this.state.markers.length !== 0) {
            markerComponents = this.state.markers.map((marker, i) =>  {
                return (
                    <Marker 
                        posX={marker.posX}
                        posY={marker.posX}
                        active={marker.active}
                        key={i}

                    />
                );
            });
        }

        return (
            <TouchableOpacity style={styles.overlayTest} onPress={(e) => this.placeMarker(e)}>
                {markerComponents}
            </TouchableOpacity>
        )
    }
}



var styles = StyleSheet.create({
    overlayTest: {
        zIndex: 100,
        // backgroundColor: "#fff",
        // opacity: 0.5,
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0
    }
  
});