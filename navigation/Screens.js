import React from 'react';
import Information from '../screens/Information';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AppStack(props) {
  return (
    <Drawer.Navigator screenOptions={{mode: 'card', headerShown: false}}>
      <Drawer.Screen name="Information" component={Information} />
    </Drawer.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: 'card',
        headerShown: false,
      }}>
      <Stack.Screen
        name="App"
        component={AppStack}
        option={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
