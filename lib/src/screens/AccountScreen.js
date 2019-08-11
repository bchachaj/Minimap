import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper';
import AuthCard from '../components/AuthCard';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
    const { logout } = useContext(AuthContext);    

    return (
        <AuthCard title="Account">
            <Button onPress={logout} >
                Logout
            </Button>
        </AuthCard>
    )
}

const styles = StyleSheet.create({});

export default AccountScreen
