import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { Appbar, Card, Button, Avatar } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';

import ImagePicker from 'react-native-image-picker';

export default class UserSelectScreen extends Component {

    state = {
        mapSrc: ''
    }

    constructor(props) {
        super(props)

        this.handleImageUpload = this.handleImageUpload.bind(this);
    }


    handleImageUpload () {
        const options = {
            title: 'Upload image for map',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        
        ImagePicker.showImagePicker(options, (response) => {

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                // You can also display the image using data:
                const source = { uri: 'data:image/jpeg;base64,' + response.data };
                const initMapScale = (Dimensions.get('window').width / response.width);

                const PARAMS = {
                    imgWidth: response.width,
                    imgHeight: response.height,
                    initMapScale,
                    imgSrc: source
                };

                Actions.map({ mapData: PARAMS})
            }
        });     

    }

    render() {
        return (
            <View>
                <Appbar.Header style={{ zIndex: 5 }}>
                    <Appbar.BackAction
                        onPress={this._goBack}
                    />
                    <Appbar.Content
                        title="Create or Select"
                        subtitle="Upload an image or choose an existing session"
                    />
                </Appbar.Header>
                <Card style={styles.userSelectCard}>
                    <Card.Title 
                        title="New Map"
                        subtitle="Upload an image from your device to get started"
                        left={(props) => <Avatar.Icon {...props} icon="folder" />}
                    />
                    <Card.Content style={styles.uploadWrapper}>
                        <Button icon="add-a-photo" mode="contained" onPress={() => this.handleImageUpload()}>Upload</Button>
                    </Card.Content>
                </Card>
                

                <Card style={styles.userSelectCard}>
                    <Button onPress={() => Actions.map()}>Find</Button>
                    <Text>SessionListView</Text>
                </Card>

            </View>
        )
    }
}



const styles = StyleSheet.create({
    userSelectCard: {
        minHeight: "25%", 
        width: "100%",
        padding: 10,
        marginBottom: "2%"
    }, 
    uploadWrapper: {
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        height: 100
    }
});