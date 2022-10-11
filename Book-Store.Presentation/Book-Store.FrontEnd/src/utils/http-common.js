import axios from 'axios';

const defaultOptions = {
  baseURL: 'http://localhost:5001/api',
};

export default axios.create(defaultOptions);
