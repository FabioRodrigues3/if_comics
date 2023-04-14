import axios from 'axios';

export const comicApi = axios.create({
  baseURL: 'https://dmvvc8p7pl.execute-api.sa-east-1.amazonaws.com/',
});
