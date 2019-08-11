import React, { useState, useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text, TextInput, Button } from 'react-native-paper';
import { NavigationEvents } from 'react-navigation';
import AuthCard from './../components/AuthCard';
import NavLink from './../components/NavLink';

import { Context as AuthContext } from '../context/AuthContext';

const SignUpScreen = ({ navigation }) => {
    const { state, signup, clear_errors } = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    return (
        <AuthCard title="Sign Up">
            <NavigationEvents
                onWillBlur={clear_errors}
            />
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

            <Text style={styles.error}>{state.errorMessage}</Text>

            <Button onPress={() => signup({ email, password })}>
                Sign Up
            </Button>

            <NavLink 
                route="Login"
                linkText="Got an account? - click to sign in!"

            />

        </AuthCard>
    )
};

styles = StyleSheet.create({
    authInput: {
        marginBottom: 5
    },
    error: {
        color: 'red'
    }
})

SignUpScreen.navigationOptions = {
    header: null
}

export default SignUpScreen
