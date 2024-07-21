import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import SplashScreen from './SplashScreen'; 
import HomeScreen from './HomeScreen'; 
import ScanScreen from './ScanScreen'; 

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Define the HomeStack component
function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Scan" component={ScanScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name=" " component={HomeStack} options={{ headerShown: false, tabBarIcon: () => null }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
