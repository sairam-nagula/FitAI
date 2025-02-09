import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import WorkoutScreen from './workoutscreen';
import ChatCoachScreen from './chatcoach';
import SignUpScreen from './SignUpScreen';
import LoginScreen from './LoginScreen';
import { Ionicons } from '@expo/vector-icons';
import { auth } from './firebaseConfig';
import { Text, View } from 'react-native';

// Enable optimized screens
enableScreens();

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Workout') {
            iconName = 'fitness-outline';
          } else if (route.name === 'Chat Coach') {
            iconName = 'chatbubble-ellipses-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Workout" component={WorkoutScreen} />
      <Tab.Screen name="Chat Coach" component={ChatCoachScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  // Firebase connection check
  useEffect(() => {
    console.log(auth ? "✅ Firebase is connected!" : "❌ Firebase failed to connect");
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}