import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Home } from './screens/Home';
import { PokemonDetails } from './screens/PokemonDetails';
import { IStackParamList } from './types/IStackParamList';

const Stack = createNativeStackNavigator<IStackParamList>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='PokemonDetails' component={PokemonDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
