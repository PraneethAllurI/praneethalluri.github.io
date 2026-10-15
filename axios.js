// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://portfolio-chatbot-backend-wj84.onrender.com/api/',
//   baseURL: 'http://localhost:5000/api',
});

export default instance;
