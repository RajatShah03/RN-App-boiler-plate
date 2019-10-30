import axios from 'axios';
import {AsyncStorage} from 'react-native';
import configuration from './config';

const getAuthToken = async () => await AsyncStorage.getItem('t');

axios.defaults({
  baseURL: configuration.baseURL,
  headers: {
    Authorization: `Bearer ${getAuthToken()}`,
    'Content-Type': 'application/json',
  },
});

axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);
