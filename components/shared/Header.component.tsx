import React from 'react';
import { Platform, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderBackButton } from '@react-navigation/elements';

import logo from '../../assets/icon.png';

export default function HeaderComponent(props: any) {
    const { canReturn } = props;

    return (<SafeAreaView style={styles.container}>
        { canReturn ? <HeaderBackButton onPress={() => props.navigation.goBack()} /> : null }
        <Text style={styles.title}>Calculadora IMC</Text>
        <Image source={logo} style={styles.logo} />
    </SafeAreaView>);
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#fff',
        shadowColor: "#aaa",
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 1
        },
        elevation: 2,
        paddingBottom: Platform.OS === 'ios'
            ? Dimensions.get('screen').width * 0.0 * -1
            : Dimensions.get('screen').width * 0.1,
        paddingTop: Platform.OS === 'ios'
            ? Dimensions.get('screen').width * 0.05
            : Dimensions.get('screen').width * 0.05,
    },
    title: {
        flex: 5,
        color: '#000',
        marginLeft: Dimensions.get('screen').width * 0.05,
        fontSize: Dimensions.get('window').width * 0.07,
        height: Dimensions.get('screen').width * 0.1,
    },
    logo: {
        flex: 1,
        resizeMode: 'contain',
        height: Dimensions.get('screen').height * 0.06,
        width: Dimensions.get('screen').height * 0.06
    }
});
