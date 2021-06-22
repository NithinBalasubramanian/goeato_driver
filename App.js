import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Pages

import Home from './component/Home';
import Notification from './component/Notification'
import Feedview from './component/Feedview'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={'Home'}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Feedview" component={ Feedview } />

        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
