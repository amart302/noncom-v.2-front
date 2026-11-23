import axios from 'axios';

import { getAccessToken } from '../lib';

export const API_URL = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
  baseURL: API_URL ?? '/api',
});

apiClient.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = getAccessToken();

    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
  }

  return config;
});

export { apiClient };
