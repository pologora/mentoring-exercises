import axios, { AxiosError } from 'axios';
import { TClient } from '../types/customTypes';

axios.defaults.baseURL = 'http://localhost:3000';

export const createClient = async (data: TClient) => {
  try {
    const res = await axios.post('/clients', data);
    console.log(res);

    return res;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error);
    } else {
      console.log('Unknown error:', error);
    }
    throw error;
  }
};

export const deleteClient = async (id: string) => {
  try {
    const res = await axios.delete(`/clients/${id}`);
    console.log(res);
    return res;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error);
    } else {
      console.log('Unknown error:', error);
    }
    throw error;
  }
};

export const getClientByID = async (id: string) => {
  try {
    const res = await axios.get(`/clients/${id}`);
    console.log(res);
    return res;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error);
    } else {
      console.log('Unknown error:', error);
    }
    throw error;
  }
};

export const updateClient = async (data: TClient, id: string) => {
  try {
    const res = await axios.patch(`/clients/${id}`, data);
    return res;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error);
    } else {
      console.log('Unknown error:', error);
    }
    throw error;
  }
};

export const getAllClients = async () => {
  try {
    const res = await axios.get(`/clients`);
    return res;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error);
    } else {
      console.log('Unknown error:', error);
    }
    throw error;
  }
};

function handleAxiosError(error: AxiosError): void {
  if (error.response) {
    // Handle response error
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // Handle request error
    console.log(error.request);
  } else {
    // Handle other Axios errors
    console.log('Axios error:', error.message);
  }
}
