import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Header from './components/shared/Header.component';
import Login from './components/login/Login.page';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Home(props: any) {
  const { navigation } = props;
  return <View style={styles.innerContainer}>
    <Text>Home...</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Text>Go to Login</Text>
    </TouchableOpacity>
  </View>;
}

export default function App() {
  const Stack = createStackNavigator();

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerMode: 'screen',
              header: (props) => <Header canReturn={false} navigation={props.navigation} />
            }}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" 
                          component={Home} 
                          options={{ headerMode: 'screen', header: (props) => <Header canReturn={true} navigation={props.navigation} /> }} 
            />
          </Stack.Navigator>
        </NavigationContainer>


      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff",
  }
});
