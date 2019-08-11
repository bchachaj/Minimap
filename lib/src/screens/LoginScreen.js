import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import AuthCard from './../components/AuthCard';


const LoginScreen = ({ navigation }) => {
    return (
        <AuthCard title="Login">
            <TextInput label="email@example.com" />
            <TextInput label="password" />
            <Button
                onPress={() => navigation.navigate('Signup')}
            >Go to Signup</Button>
            <Button
                color="blue"
                onPress={() => navigation.navigate('mainFlow')}
            >
                Go to Main
            </Button>
        </AuthCard>
    )
}



export default LoginScreen
