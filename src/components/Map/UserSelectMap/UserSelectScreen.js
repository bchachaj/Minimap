import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Appbar, Card, Button, Avatar } from 'react-native-paper';

export default class UserSelectScreen extends Component {
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
                        subtitle="Upload an image from your phone to get started"
                        left={(props) => <Avatar.Icon {...props} icon="folder" />}
                    />
                    <Card.Content style={styles.uploadWrapper}>
                        <Button icon="add-a-photo" mode="contained" onPress={() => console.log('Pressed')}>Upload</Button>
                    </Card.Content>
                </Card>
                

                <Card style={styles.userSelectCard}>

                    <Button>Find</Button>
                    <Text>SessionList</Text>
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