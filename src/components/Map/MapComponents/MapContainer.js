import React, { Component } from 'react'
import { Text, View } from 'react-native'

import MapTile from './MapTile';
// import map and overlap seperately

export default class MapContainer extends Component {
    render() {
        return (
            <View>
                <MapTile />
            </View>
        )
    }
}
