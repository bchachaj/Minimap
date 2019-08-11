import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Title } from 'react-native-paper';


const AuthCard = ({ children, title }) => {
    return (
        <View style={styles.authWrapper}>
            <Title style={styles.authTitle}>{title}</Title>
            { children }
        </View>
    )
}

const styles = StyleSheet.create({
    authWrapper: {
        padding: 20,
        display: "flex", 
        alignContent: "center", 
        justifyContent: "center",
        marginBottom: 200,
        flex: 1
    }, 
    authTitle: {
        textAlign: "center", 
        fontSize: 30,
        marginBottom: 20
    }
})

export default AuthCard
