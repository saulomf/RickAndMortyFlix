import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Pages/Home';
import Personagens from './Pages/Personagens';
import Episodios from './Pages/Episodios';
import Locais from './Pages/Locais';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Personagens"
            component={Personagens}
            route={'Personagens'}
          />
          <Stack.Screen
            name="Episodios"
            component={Episodios}
            route={'Episodios'}
          />
          <Stack.Screen name="Locais" component={Locais} route={'Locais'} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
};

export default Routes;
