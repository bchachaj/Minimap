import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { Appbar, Card, Button, Avatar } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';

import ImagePicker from 'react-native-image-picker';

export default class UserSelectScreen extends Component {

    state = {
        loadingImage: false, 
    }

    constructor(props) {
        super(props)
        this.handleImageUpload = this.handleImageUpload.bind(this);
        this.renderButton = this.renderButton.bind(this);
        this.toggleLoadingState = this.toggleLoadingState.bind(this);
    }


    handleImageUpload() {
        // this.toggleLoadingState();

        const options = {
            title: 'Upload image for map',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };


        this.toggleLoadingState();
        ImagePicker.showImagePicker(options, (response) => {

            if (response.didCancel) {
                console.log('User cancelled image picker');
                // this.toggleLoadingState();
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);

                // add dialog
                // this.toggleLoadingState();
            } else {
                // You can also display the image using data:
                // this.toggleLoadingState();
                const source = { uri: 'data:image/jpeg;base64,' + response.data };
                const initMapScale = (Dimensions.get('window').width / response.width);

                const PARAMS = {
                    imgWidth: response.width,
                    imgHeight: response.height,
                    initMapScale,
                    imgSrc: source
                };
                Actions.map({ mapData: PARAMS })
                // this.toggleLoadingState();
            }

            this.toggleLoadingState();
        });

    }

    toggleLoadingState(e) {
        console.log(e)
        this.state.loadingImage ? this.setState({ loadingImage: false }) : this.setState({ loadingImage: true });
    }
  

    renderButton() {
        if(this.state.loadingImage) {
            return (
                <Button icon="add-a-photo" mode="contained" loading onPress={() => this.handleImageUpload()}>Loading</Button>
            );
        } else {
            return (
                <Button icon="add-a-photo" mode="contained" onPress={() => this.handleImageUpload()}>Upload</Button>
            );
        }
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
                        left={(props) => <Avatar.Icon {...props} icon="add" />}
                    />
                    <Card.Content style={styles.uploadWrapper}>
                        {/* <Button icon="add-a-photo" mode="contained" onPress={() => this.handleImageUpload()}>Upload</Button> */}
                        {this.renderButton()}
                        {/* <Button icon="add-a-photo" mode="contained" onPress={() => this.handleImageUpload()}>Upload</Button> */}
                    </Card.Content>
                </Card>

                <Card style={styles.userSelectCard}>
                    <Card.Title
                        title="Existing Session"
                        subtitle="Browse your maps"
                        left={(props) => <Avatar.Icon {...props} icon="search" />}
                    />
                    <Card.Content style={styles.uploadWrapper}>
                        <Button onPress={() => Actions.map()}>Find</Button>
                        <Text>SessionListView</Text>
                    </Card.Content>
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