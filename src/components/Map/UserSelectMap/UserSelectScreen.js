import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Appbar, Card, Button, Avatar } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';

import ImagePicker from 'react-native-image-picker';

export default class UserSelectScreen extends Component {

    state = {
        avatarSource: ''
    }

    constructor(props) {
        super(props)

        this.handleImageUpload = this.handleImageUpload.bind(this);
    }


    handleImageUpload () {
        console.log('pressed')

        const options = {
            title: 'Select Avatar',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        /**
         * The first arg is the options object for customization (it can also be null or omitted for default options),
         * The second arg is the callback which sends object: response (more info in the API Reference)
         */
        console.log(ImagePicker)
        
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source,
                });
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