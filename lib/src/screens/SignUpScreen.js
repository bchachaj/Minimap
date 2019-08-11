import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const SignUpScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={{ fontSize: 50 }}>SignUp Screen</Text>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
            />
            <Button
                title="Go to Main"
                onPress={() => navigation.navigate('mainFlow')}
            />
        </View>
    )
}

const styles = StyleSheet.create({});

export default SignUpScreen
