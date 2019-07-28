import React, { Component, Fragment} from 'react';

import { Actions } from 'react-native-router-flux';

import { Text, View } from 'react-native'
import { Button, Card } from 'react-native-paper';
import { Appbar } from 'react-native-paper';

import MapContainer from './MapComponents/MapContainer';


export default class MapView extends Component {
    _goBack = () => Actions.pop();

    _onSearch = () => console.log('Searching');

    _onMore = () => console.log('Shown more');

    render() {
        return (
            <Fragment>
                <Appbar.Header style={{ zIndex: 5 }}>
                    <Appbar.BackAction
                        onPress={this._goBack}
                    />
                    <Appbar.Content
                        title="MiniMap Focus"
                        subtitle="Minimap subtitle"
                    />
                    <Appbar.Action icon="search" onPress={this._onSearch} />
                    <Appbar.Action icon="more-vert" onPress={this._onMore} />
                </Appbar.Header>


                <MapContainer />
            </Fragment>
        )
    }
}
