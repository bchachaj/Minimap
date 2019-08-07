import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import Marker from './Marker';

//stub data - delete 
const markers = require('./markers.json');

export default class MarkerGrid extends Component {
    state = {
        markers: [], 
        dimensions: {
            height: 0, 
            width: 0
        }
    };

    componentDidMount() {
        this.setState({ markers: markers.markers });
    }

    placeMarker(e) {
        // console.log(this.state);
        console.log(`place marker at ${e.nativeEvent.locationX}, ${e.nativeEvent.locationY}`)
        
        const { markers } = this.state; 

        let xPosPercentage = (e.nativeEvent.locationX / this.state.dimensions.width) * 100;
        let yPosPercentage = (e.nativeEvent.locationY / this.state.dimensions.width) * 100;

        console.log(xPosPercentage, yPosPercentage);
        
        const newMarker = {
            "posX": xPosPercentage,
            "posY": yPosPercentage,
            "active": false
        }
      
        markers.push(newMarker);
        this.setState({ ...this.state, markers})
        // need to calculate marker X+y by calculating image width by event coordinates to give percentage.
        
   }

    find_dimesions(layout) {
        const { x, y, width, height } = layout;
        this.setState({ ...this.state, dimensions: { width, height }});
    }

    render() {
        let markerComponents; 

        if(this.state.markers.length !== 0) {
            markerComponents = this.state.markers.map((marker, i) =>  {
                return (
                    <Marker 
                        posX={marker.posX}
                        posY={marker.posY}
                        active={marker.active}
                        key={i}

                    />
                );
            });
        }

        return (
            <TouchableWithoutFeedback style={styles.overlayTest} onPress={(e) => this.placeMarker(e)}>
            <View style={styles.overlayTest} onLayout={(event) => { this.find_dimesions(event.nativeEvent.layout) }}>
                {markerComponents}
             </View>
            </TouchableWithoutFeedback>
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
        left: 0,
        borderWidth: 1,
        borderColor: "black",
        // backgroundColor: "black",
        opacity: 0.5
    }
  
});