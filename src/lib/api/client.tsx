import axios from 'axios';

const client = axios.create({
  baseURL: 'http://ec2-3-36-49-236.ap-northeast-2.compute.amazonaws.com:4000/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default client;
