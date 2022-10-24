import React from 'react';
import {Dimensions} from 'react-native';
import Information from '../screens/Information';
import Onboarding from '../screens/Onboarding';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

const {width} = Dimensions.get('screen');

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
        name="Onboarding"
        component={Onboarding}
        option={{
          headerShown: true,
        }}
      />
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
