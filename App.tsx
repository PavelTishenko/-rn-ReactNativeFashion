import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
//Screens
import Onboarding from './src/Authentication/Onboarding';
import LoadAssets from './src/components';
import { NavigationContainer } from '@react-navigation/native';
import  Welcome  from './src/Authentication/Welcome';
// Styling
import { ThemeProvider } from '@shopify/restyle';
import  theme  from './src/components/Theme/Theme';
import { Routes } from './src/components/Navigation';


const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

const AuthenticationStack = createStackNavigator<Routes>()

const AuthenticationNavigator = () => {
  return(
  <AuthenticationStack.Navigator headerMode="none">
    <AuthenticationStack.Screen name="Onboarding" component={Onboarding}/>
    <AuthenticationStack.Screen name="Welcome" component={Welcome}/>
  </AuthenticationStack.Navigator>
  );
};


export default function App() {
  return (
    <ThemeProvider {...{theme}}>
      <NavigationContainer>
        <AuthenticationNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}