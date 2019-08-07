import React, { Component } from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Marker from './Marker';

//stub data - delete 
const markers = require('./markers.json');

export default class MarkerGrid extends Component {

    constructor(props) {
        super(props);
        const { gridHeight, gridWidth, gridScale } = props;

        this.state = {
            markers: [],
            dimensions: {
                height: gridHeight,
                width: gridWidth,
                scale: gridScale
            },
            activeMarker: {}
        };
    }

    componentDidMount() {
        //stubbed
        this.setState({ markers: markers.markers });
    }

    addMarkerToState() {
        //adding via menu 

    }

    placeMarkerOnGrid(e) {

        const { markers } = this.state;

        let xPosPercentage = (e.nativeEvent.locationX / this.state.dimensions.width) * 100;
        let yPosPercentage = (e.nativeEvent.locationY / this.state.dimensions.height) * 100;

        const newMarker = {
            "posX": xPosPercentage,
            "posY": yPosPercentage,
            "active": false
        }

        //stubbed
        markers.push(newMarker);

        this.setState({ ...this.state, markers })

    }
    
    render() {
        let markerComponents;

        if (this.state.markers.length !== 0) {
            markerComponents = this.state.markers.map((marker, i) => {
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
            <TouchableWithoutFeedback style={styles.overlayTest} onPress={(e) => this.placeMarkerOnGrid(e)}>
                <View style={styles.overlayTest}>
                    {markerComponents}
                </View>

            </TouchableWithoutFeedback>
        )
    }
}



var styles = StyleSheet.create({
    overlayTest: {
        zIndex: 100,
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: 'rgba(255,255,255,0.1)'
    }

});