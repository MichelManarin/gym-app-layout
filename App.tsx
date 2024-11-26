import React from 'react';
import WelcomePage from './src/pages/welcome-page'; 
import GoalsPage from './src/pages/goals-page'; 
import HeightPage from './src/pages/height-page'; 
import HomePage from './src/pages/home-page'; 
import ConfigPage from './src/pages/config-page'; 
import DiaryPage from './src/pages/diary-page'; 
import ScannerPage from './src/pages/scanner-page'; 
import StatsPage from './src/pages/stats-page'; 
import SplashPage from './src/pages/splash-page'; 
import LoginPage from './src/pages/login-page';

import { AppProvider } from "./src/contexts/AppContext";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashPage}  options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginPage}  options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomePage}  options={{ headerShown: false }} />
          <Stack.Screen name="Welcome" component={HomePage}  options={{ headerShown: false }} />
          <Stack.Screen name="Scanner" component={ScannerPage}  options={{ headerShown: false }} />
          <Stack.Screen name="Height" component={HeightPage}  options={{ headerShown: false }} />
          <Stack.Screen name="Config" component={ConfigPage}  options={{ headerShown: false }} />
          <Stack.Screen name="Goals" component={GoalsPage}  options={{ headerShown: false }} />
          <Stack.Screen name="Stats" component={StatsPage}  options={{ headerShown: false }} />
          <Stack.Screen name="Diary" component={DiaryPage}  options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
