import axios from 'axios';

// 1. Configuramos la instancia centralizada
const api = axios.create({
  // En Next.js usamos process.env.NEXT_PUBLIC_ para que sea visible en el cliente
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// 2. Interceptor para el Token (Opcional pero recomendado)
// Esto es como un filtro en Java que añade el JWT a cada petición automáticamente
api.interceptors.request.use((config) => {
  const token = typeof globalThis.window === 'undefined' ? null : localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/* --- ENDPOINTS --- */

// Auth
export const login = (datos) => api.post('/auth/login', datos);

// Alumnos
export const registro = (datos) => api.post('/alumnos/registro', datos);

// Casos clínicos
export const getCasos = () => api.get('/casos');
export const getCaso = (id) => api.get(`/casos/${id}`);

// Mensajes
export const getMensajes = () => api.get('/mensajes');
export const enviarMensaje = (datos) => api.post('/mensajes', datos);

// Contacto
export const enviarContacto = (datos) => api.post('/contacto', datos);

// Newsletter
export const suscribirNewsletter = (datos) => api.post('/newsletter/suscribir', datos);

// Solo un export default al final
export default api;