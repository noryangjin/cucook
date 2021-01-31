import axios from 'axios';

const client = axios.create({
  baseURL: 'http://www.cucook.net:4000/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default client;
