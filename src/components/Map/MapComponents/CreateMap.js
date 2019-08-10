import React from 'react'
import { View, Text } from 'react-native'
import { Appbar, Card, Button, Avatar } from 'react-native-paper';

const CreateMap = (props) => {
    return (
        <View>
            <Text>Create</Text>

            <Card style={props.styles.userSelectCard}>
                <Card.Title
                    title="New Map"
                    subtitle="Upload an image from your device to get started"
                    left={(props) => <Avatar.Icon {...props} icon="add" />}
                />
                <Card.Content style={props.styles.uploadWrapper}>
                    {/* {renderButton(props.loading, props.handleImageUpload)} */}
                    <Text>Hi</Text>
                </Card.Content>
            </Card>
        </View>
    )
}


const renderButton = (loading, handleImageUpload) => {
    return (
        <Button icon="add-a-photo"
            mode="contained"
            loading={loading}
            onPress={() => loading ? loading : handleImageUpload()}>{loading ? "Loading" : "Upload"}</Button>
    );
}

export default CreateMap
