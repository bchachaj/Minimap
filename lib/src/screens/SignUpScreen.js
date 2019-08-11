import React, { useState, useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, TextInput, Button, Title } from 'react-native-paper';

import AuthCard from './../components/AuthCard';

import { Context as AuthContext } from '../context/AuthContext';


const SignUpScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <AuthCard title="Sign Up">
            <TextInput style={styles.authInput} 
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
                label="email@example.com"/>

            <TextInput style={styles.authInput} 
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                label="password"/>

            <Button onPress={() => signup({ email, password })}>
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
