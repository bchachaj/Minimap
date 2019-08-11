import React, { Fragment } from 'react';
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper';
import { withNavigation } from 'react-navigation';


const NavLink = ({ navigation, linkText, route }) => {
    return (
        <Fragment>
            <Button onPress={() => navigation.navigate(route)}>
                <Text>{linkText}</Text>
            </Button>
        </Fragment>
    )
}

export default withNavigation(NavLink);

