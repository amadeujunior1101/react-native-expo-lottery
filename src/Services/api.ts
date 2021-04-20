import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { logout } from '../auth/authentication';

const BASE_URL_LOCAL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    //   baseURL: BASE_URL_LOCAL || 'http://localhost:3333',
    baseURL: 'http://192.168.129.138:3333',
});

api.interceptors.request.use(async (config) => {

    const userToken = await AsyncStorage.getItem('auth:token');
    config.headers.Authorization = `Bearer ${`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjM5LCJpYXQiOjE2MTg4ODAxNjUsImV4cCI6MTYxODk2NjU2NX0.ThSC-dS5AKc_Bt8MRaelvff2_ePKXFmNJxQ2VKscaZ0`}`;

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