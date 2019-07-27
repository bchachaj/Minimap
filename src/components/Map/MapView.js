import React, { Component, Fragment} from 'react'
import { Text, View } from 'react-native'
// import { CardSection, Card, Header } from './common'
import { Button, Card } from 'react-native-paper';
import { Appbar } from 'react-native-paper';

export default class MapView extends Component {
    _goBack = () => console.log('Went back');

    _onSearch = () => console.log('Searching');

    _onMore = () => console.log('Shown more');

    render() {
        return (
            // Map header, can import later 
            <Fragment>
                <Appbar.Header>
                    <Appbar.BackAction
                        onPress={this._goBack}
                    />
                    <Appbar.Content
                        title="Title"
                        subtitle="Subtitle"
                    />
                    <Appbar.Action icon="search" onPress={this._onSearch} />
                    <Appbar.Action icon="more-vert" onPress={this._onMore} />
                </Appbar.Header>

                <Card>
                    <Button>Click Me</Button>
                </Card>
            </Fragment>
        )
    }
}
