import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { Context as MapContext } from '../context/MapContext';
import UserSelectScreen from './../../../src/components/Map/UserSelectMap/UserSelectScreen';
import CreateMap from './../components/CreateMap';

const MapListScreen = ({ navigation }) => {
    const { getMaps, uploadImageForMap, state } = useContext(MapContext);

    useEffect(() => {
        getMaps();
    }, []);

    console.log(state);

    

    let loading = false; 
    return (

        <View>
            <Button
                title="Go to Map Focus"
                onPress={() => navigation.navigate('MapFocus')}
            />
            {/* <UserSelectScreen upload={uploadImageForMap}/> */}
            <CreateMap upload={uploadImageForMap}/>

        </View>
    )
}

const styles = StyleSheet.create({});

export default MapListScreen
