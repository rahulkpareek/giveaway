import axios from 'axios';

// Create an instance of Axios with a base URL
const API = axios.create({
    baseURL: 'http://localhost:5000/api', // Replace with your backend base URL
});

// Add an interceptor to include the token in requests automatically
API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Get token from localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Set Authorization header
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// User-related APIs
export const registerUser = (data) => API.post('/users/register', data);
export const loginUser = (data) => API.post('/users/login', data);

// Item-related APIs
export const fetchUserItems = () => API.get('/items/my-items');
export const createItem = (data) => API.post('/items', data);

