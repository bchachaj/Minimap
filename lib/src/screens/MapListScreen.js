import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { Context as MapContext } from '../context/MapContext';


const MapListScreen = ({ navigation }) => {
    const { getMaps, state } = useContext(MapContext);

    useEffect(() => {
        getMaps();
    }, []);

    console.log(state)

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
