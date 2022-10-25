/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppLoading from 'expo-app-loading';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import type {Node} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
  Image,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Screens from './navigation/Screens';

const App: () => Node = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <Screens />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
