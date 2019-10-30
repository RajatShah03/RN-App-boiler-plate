/**
 * VeraDotStyleApp
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import RootNavigator from './Navigation';
import {initializeTheme} from './Themes';

const App = () => {
  useEffect(() => {
    initializeTheme();
  }, []);

  return (
    <View style={styles.body}>
      <RootNavigator theme="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
  },
});

export default App;
