import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { Context as MapContext } from '../context/MapContext';
import UserSelectScreen from './../../../src/components/Map/UserSelectMap/UserSelectScreen';

const MapListScreen = ({ navigation }) => {
    const { getMaps, uploadImageForMap, state } = useContext(MapContext);

    useEffect(() => {
        getMaps();
    }, []);

    console.log(state);

    

    let loading = false; 
    return (

        <View>
            <Text>MapListScreen</Text>
            <Button
                title="Go to Map Focus"
                onPress={() => navigation.navigate('MapFocus')}
            />
            <UserSelectScreen upload={uploadImageForMap}/>
        </View>
    )
}

const styles = StyleSheet.create({});

export default MapListScreen
