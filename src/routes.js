import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();
function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          gestureEnabled: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#7159c1',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTintColor: '#fff',

          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: 'Main' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// const Navigato = createStackNavigator(
//   {
//     Main: { screen: Main },
//     User: { screen: User },
//   },
//   {
//     initialRouteName: 'Main',
//     defaultNavigationOptions: {
//       gestureEnabled: false,
//     },
//   }
// {
//   headerLayoutPreset: 'center',
//   headerBackTitleVisible: false,
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgrondColor: '#7159c1',
//     },
//     headerTintColor: '#fff',
//   },
// }

export default Routes;
