import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Pages/Home';
import Personagens from '../Pages/Characters';
import Episodios from '../Pages/Episodes';
import Locais from '../Pages/Places';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Personagens"
            component={Personagens}
          />
          <Stack.Screen
            name="Episodios"
            component={Episodios}
          />
          <Stack.Screen
            name="Locais"
            component={Locais}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
