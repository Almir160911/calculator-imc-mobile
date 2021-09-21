import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SubHeader from './Subheader.component';

export default function Login(props: any) {
    return <View style={styles.container}>
        <SubHeader />
        <View style={{flex: 1}}>
            <TouchableOpacity 
                style={{flex: 1}} 
                onPress={() => props.navigation.navigate('Home')}>
                <Text>Go to Home</Text>
            </TouchableOpacity>
        </View>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Dimensions.get('screen').height * 0.05
    },
    mainContent: {

    }
});