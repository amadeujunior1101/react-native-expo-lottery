import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../config';

const BASE_URL_LOCAL = config.EXPO_APP_BASE_URL;

const api = axios.create({
    baseURL: BASE_URL_LOCAL || 'http://localhost:3333',
    // baseURL: 'http://192.168.129.138:3333',
});

api.interceptors.request.use(async (config) => {

    const userToken = await AsyncStorage.getItem('auth:token');
    config.headers.Authorization = `Bearer ${userToken}`;

    return config;
}, (error) => {

    // if (!error.status) {
    //   const history = useHistory();
    //   console.log("Please check your internet connection...");
    //   return history.push("/error-connection")
    // }

    // if (error.response.status === 401 || error.response.status === 403) return logout()

    // return Promise.reject(error);
});

export default api;