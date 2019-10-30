import AsyncStorage from '@react-native-community/async-storage';
import darkTheme from './dark';
import lightTheme from './light';
import typography from './typography';

const initializeTheme = async () => {
  const currentTheme = await AsyncStorage.getItem('currentTheme');
  if (!currentTheme || currentTheme === '') {
    AsyncStorage.setItem('currentTheme', 'light');
  }
};

const toggleTheme = async () => {
  const currentTheme = await AsyncStorage.getItem('currentTheme');
  if (currentTheme === 'light') {
    await AsyncStorage.setItem('currentTheme', 'dark');
  } else {
    await AsyncStorage.setItem('currentTheme', 'light');
  }
};

export {darkTheme, lightTheme, typography, initializeTheme, toggleTheme};
