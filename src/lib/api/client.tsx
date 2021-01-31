import axios from 'axios';

const client = axios.create({
  baseURL:
    'http://ec2-52-79-240-152.ap-northeast-2.compute.amazonaws.com:4000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default client;
