import axios from 'axios';

const client = axios.create({
  baseURL:
    'http://ec2-15-165-235-194.ap-northeast-2.compute.amazonaws.com:4000/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default client;
