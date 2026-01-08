
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  active: boolean;
}

const API_URL = 'http://localhost:3001/users';

export const userApi = axios.create({
  baseURL: API_URL,
});

export const getUsers = () => userApi.get<User[]>('/');
export const createUser = (data: Partial<User>) => userApi.post<User>('/', data);
export const updateUser = (id: number, data: User) => userApi.put<User>(`/${id}`, data);
export const patchUser = (id: number, data: Partial<User>) => userApi.patch<User>(`/${id}`, data);
export const deleteUser = (id: number) => userApi.delete(`/${id}`);
