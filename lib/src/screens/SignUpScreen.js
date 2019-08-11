import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, TextInput, Button, Title } from 'react-native-paper';

import AuthCard from './../components/AuthCard';

const SignUpScreen = ({ navigation }) => {
    return (
        <AuthCard title="Sign Up">
            <TextInput style={styles.authInput} 
                label="email@example.com"/>
            <TextInput style={styles.authInput} 
                label="password"/>

            <Button>
                Sign Up
            </Button>


            <Button
                onPress={() => navigation.navigate('Login')}
            >Go to Login</Button>
            <Button
                color="blue"
                onPress={() => navigation.navigate('mainFlow')}
            >
            Go to Main
            </Button>
        </AuthCard>
    )
};

styles = StyleSheet.create({
    authInput: {
        marginBottom: 5
    }
})

SignUpScreen.navigationOptions = {
    header: null
}

export default SignUpScreen
