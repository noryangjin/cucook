import axios from 'axios';

const client = axios.create({
  baseURL: 'http://www.cucook.net/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default client;
