import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Marker from './Marker';

//stub data - delete 
const markers = require('./markers.json');

export default class MarkerGrid extends Component {
    state = {
        markers: []
    }

    componentDidMount() {
        this.setState({ markers: markers.markers });
    }



    render() {
        console.log(this.state.markers);
        
        let markerComponents; 

        if(this.state.markers.length !== 0) {
            markerComponents = this.state.markers.map((marker, i) =>  {
                console.log(marker);
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
        // this.state.markers.map((el) => console.log(el))

        return (
            <View style={styles.overlayTest}>
                {/* <Marker/> */}
                {markerComponents}
            </View>
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