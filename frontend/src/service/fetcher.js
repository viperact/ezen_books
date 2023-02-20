import axios from 'axios';
const url = 'http://localhost:8090';

export const getProducts = () => {
  const res = axios(url + '/product/all').then();
  return res;
};
