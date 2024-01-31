import {View} from 'react-native';
import React from 'react';
import StackNavigator from './Src/navigation/StackNavigator';
import HomeScreen from './Src/screens/home/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
