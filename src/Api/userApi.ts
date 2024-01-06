import { TUser } from '../types/customTypes';
import { LoginValues } from '../yupValidationScheemas/loginValidationSchema';
import { RegisterFormValues } from '../yupValidationScheemas/registerValidationScheema';
import {
  createResource,
  deleteResource,
  getAllResource,
  getResourceById,
  handleAxiosError,
  updateResource,
} from './resourceService';

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/users';

export const createUser = (data: RegisterFormValues) => {
  return createResource(data, 'users');
};

export const deleteUser = (id: string) => {
  return deleteResource(id, 'users');
};

export const getUserByID = (id: string) => {
  return getResourceById<TUser>(id, 'users');
};

export const updateUser = (data: TUser, id: string) => {
  return updateResource(data, id, 'users');
};

export const getAllUsers = () => {
  return getAllResource<TUser[]>('users');
};

export const getUserByUsername = async (data: LoginValues): Promise<TUser> => {
  try {
    const res = await axios.get<TUser[]>(`/?username=${data.username}`);

    const isValid = isValidPassword(data.password, res.data[0].password);
    if (isValid) {
      return res.data[0];
    } else {
      throw new Error('Wrong password or username');
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error);
    } else {
      console.log('Unknown error:', error);
    }
    throw error;
  }
};

function isValidPassword(givenPass: string, savedPass: string) {
  return givenPass === savedPass;
}
