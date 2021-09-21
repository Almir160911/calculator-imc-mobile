import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Header from './components/shared/Header.component';
import Login from './components/login/Login.page';
import Home from './components/home/Home.page';
import PersonContextProvider from './contexts/Person.context';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <PersonContextProvider>
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
        </PersonContextProvider>
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
});
