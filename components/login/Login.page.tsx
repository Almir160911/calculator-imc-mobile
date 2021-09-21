import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

import Footer from '../shared/Footer.component';
import LoginForm from './Login.form';
import SubHeader from './Subheader.component';
import UserContextProvider from '../../contexts/User.context';

export default function Login(props: any) {
    return <View style={styles.container}>
        <View style={styles.mainContent}>
            <SubHeader />
            <UserContextProvider>
                <LoginForm navigation={props.navigation} />
            </UserContextProvider>
        </View>
        <Footer />
    </View>;
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Dimensions.get('screen').height * 0.05
    },
    mainContent: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
});