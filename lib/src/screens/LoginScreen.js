import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const LoginScreen = ({ navigation }) => {
    return (
        <View>
            <Text>LoginScreen</Text>
            <Button
                title="Go to Signin"
                onPress={() => navigation.navigate('Signup')}
            />
        </View>
    )
}

const styles = StyleSheet.create({});

export default LoginScreen
