import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native'
import { Appbar, Card, Button, Avatar} from 'react-native-paper';
import { Actions } from 'react-native-router-flux';

import ImagePicker from 'react-native-image-picker';

const ImagePickerOptions = {
    title: 'Upload image for map',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};
export default class UserSelectScreen extends Component {

    state = {
        loadingImage: false, 
        mapData: {}, 
        mapName: ''
    }

    constructor(props) {
        super(props)
        this.handleImageUpload = this.handleImageUpload.bind(this);
        this.renderButton = this.renderButton.bind(this);
        this.toggleLoadingState = this.toggleLoadingState.bind(this);
        this.createMap = this.createMap.bind(this);
    }


    createMap() {   
        // reach utility to create map in db, upon sucess >>
             //access map scene with params 
        // Actions.map({ mapData: this.state.mapData })
        console.log(this.state.mapData);
    }


    handleImageUpload() {
        const options = ImagePickerOptions;
        
        // loading indicator on Button, lightbox will be better UX
        this.toggleLoadingState();

        ImagePicker.showImagePicker(options, (response) => {

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);

                
            // add dialog
            }
            else if (response.fileSize >= 20553050) {
                console.log('keep image upload under 2mb')
            } else {
                const source = { uri: 'data:image/jpeg;base64,' + response.data };
                const initMapScale = (Dimensions.get('window').width / response.width);
                
                const clientPARAMS = {
                    imgWidth: response.width,
                    imgHeight: response.height,
                    initMapScale,
                    imgSrc: source
                };

                const serverPARAMS = response;
                console.log(response)

                // const uploadParams = { fileName: response.fileName }
                this.props.upload({ fileName: response.fileName })
                
                this.setState({ ...this.state, mapData: clientPARAMS }, () => this.createMap()); 

            }

            this.toggleLoadingState();
        });

    }

    toggleLoadingState() {
        this.state.loadingImage ? this.setState({ loadingImage: false }) : this.setState({ loadingImage: true });
    }
  
    renderButton() {
        const loading = this.state.loadingImage; 

        return (
            <Button icon="add-a-photo" 
                    mode="contained" 
                    loading={loading} 
                    onPress={() => loading ? loading : this.handleImageUpload()}>{loading ? "Loading" : "Upload"}</Button>
        );
    }
 
    render() {
        return (
            <View>
        
                {/* <Appbar.Header style={{ zIndex: 5 }}>
                    <Appbar.BackAction
                        onPress={this._goBack}
                    />
                    <Appbar.Content
                        title="Create or Select"
                        subtitle="Upload an image or choose an existing session"
                    />
                </Appbar.Header> */}
                <Card style={styles.userSelectCard}>
                    <Card.Title
                        title="New Map"
                        subtitle="Upload an image from your device to get started"
                        left={(props) => <Avatar.Icon {...props} icon="add" />}
                    />
                    <Card.Content style={styles.uploadWrapper}>
                        {this.renderButton()}
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