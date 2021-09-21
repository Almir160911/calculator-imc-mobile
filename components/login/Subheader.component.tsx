import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

export default function SubHeader() {
    return (<View style={styles.container}>
        <Text style={styles.primary}>Seja bem vindo!</Text>
        <Text style={styles.secondary}>Faça seu login para continuar</Text>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    primary: {
        fontWeight: 'bold',
        fontSize: 32,
    },
    secondary: {
        fontSize: 24
    }
});