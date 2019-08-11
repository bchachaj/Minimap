import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const MapListScreen = ({ navigation }) => {
    return (
        <View>
            <Text>MapListScreen</Text>
            <Button
                title="Go to Map Focus"
                onPress={() => navigation.navigate('MapFocus')}
            />
        </View>
    )
}

const styles = StyleSheet.create({});

export default MapListScreen
