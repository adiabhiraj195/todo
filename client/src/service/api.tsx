import axios from 'axios';

// const BASE_URL = 'http://localhost:8000';
const BASE_URL = 'https://todoappbackend-e026.onrender.com';


const API = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});


export default API;