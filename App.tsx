import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import CustomButtonGroup from './src/components/footer-bottom-group/index';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import WelcomePage from './src/pages/welcome-page'; 
import GoalsPage from './src/pages/goals-page'; 
import HeightPage from './src/pages/height-page'; 
import HomePage from './src/pages/home-page'; 
import { AppProvider } from "./src/contexts/AppContext";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { height } = Dimensions.get('window'); 

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AppProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomePage}  options={{ headerShown: false }} />
        <Stack.Screen name="Goals" component={GoalsPage}  options={{ headerShown: false }} />
        <Stack.Screen name="Height" component={HeightPage}  options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomePage}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </AppProvider>
  );
};

export default App;
