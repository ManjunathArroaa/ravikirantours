import axios from 'axios';
import { API_BASE_URL } from './constants';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor for adding auth token if needed in future
apiClient.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const eventsAPI = {
  getAll: () => apiClient.get('/events'),
  getById: (id: number) => apiClient.get(`/events/${id}`),
  create: (data: any) => apiClient.post('/events', data),
  update: (id: number, data: any) => apiClient.put(`/events/${id}`, data),
  delete: (id: number) => apiClient.delete(`/events/${id}`),
  getPhotos: (eventId: number) => apiClient.get(`/events/${eventId}/photos`),
};

export const authAPI = {
  login: (username: string, password: string) =>
    apiClient.post('/auth/login', { username, password }),
  logout: () => localStorage.removeItem('token'),
};

export const photosAPI = {
  upload: (eventId: number, file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    return apiClient.post(`/events/${eventId}/photos`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  delete: (photoId: number) => apiClient.delete(`/photos/${photoId}`),
};

export default apiClient;
