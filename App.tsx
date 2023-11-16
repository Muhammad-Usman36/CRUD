import React from 'react';
//import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Page1 from './Page1';
import Page2 from './Page2';
// <Stack.Screen name="Categories" component={Categories} />

const Stack = createStackNavigator();
export const App = () => {
  return (
    <>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Page1" component={Page1}/>
    <Stack.Screen name="Page2" component={Page2}/>
      </Stack.Navigator>
    </NavigationContainer>
</>
  );
};

export default App;