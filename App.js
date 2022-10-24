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
    // <SafeAreaView style={backgroundStyle}>
    //   {/*<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />*/}

    //   {/*  <Header />*/}
    //   {/*  <View*/}
    //   {/*    style={{*/}
    //   {/*      backgroundColor: isDarkMode ? Colors.black : Colors.white,*/}
    //   {/*    }}>*/}
    //   {/*    <Section title="Step One">*/}
    //   {/*      Edit <Text style={styles.highlight}>App.js</Text> to change this*/}
    //   {/*      screen and then come back to see your edits.*/}
    //   {/*    </Section>*/}
    //   {/*    <Section title="See Your Changes">*/}
    //   {/*      <ReloadInstructions />*/}
    //   {/*    </Section>*/}
    //   {/*    <Section title="Debug">*/}
    //   {/*      <DebugInstructions />*/}
    //   {/*    </Section>*/}
    //   {/*    <Section title="Learn More">*/}
    //   {/*      Read the docs to discover what to do next:*/}
    //   {/*    </Section>*/}
    //   {/*    <LearnMoreLinks />*/}
    //   {/*  </View>*/}
    //   {/*</ScrollView>*/}
    // </SafeAreaView>
    // <ScrollView contentInsetAdjustmentBehavior="automatic">
    <SafeAreaProvider>
      <NavigationContainer>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <Screens />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
