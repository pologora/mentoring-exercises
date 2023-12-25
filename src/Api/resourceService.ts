import axios, { AxiosError } from 'axios';
import { TClient, TOrder } from '../types/customTypes';

const defaultUrls = {
  clients: 'http://localhost:3000/clients',
  orders: 'http://localhost:3000/orders',
};

type ResourseType = 'clients' | 'orders';

const createResource = async <T>(data: T, resourse: ResourseType) => {
  try {
    axios.defaults.baseURL = defaultUrls[resourse];
    const res = await axios.post('/', data);
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

const deleteResource = async (id: string, resourse: ResourseType) => {
  try {
    axios.defaults.baseURL = defaultUrls[resourse];
    const res = await axios.delete(`/${id}`);
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

const getResourceById = async (id: string, resourse: ResourseType) => {
  try {
    axios.defaults.baseURL = defaultUrls[resourse];
    const res = await axios.get(`/${id}`);
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

const updateResource = async <T>(
  data: T,
  id: string,
  resourse: ResourseType
) => {
  try {
    axios.defaults.baseURL = defaultUrls[resourse];
    const res = await axios.patch(`/${id}`, data);
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

const getAllResource = async (resourse: ResourseType) => {
  try {
    axios.defaults.baseURL = defaultUrls[resourse];
    const res = await axios.get(`/`);
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

export const createClient = (data: TClient) => {
  return createResource(data, 'clients');
};
export const createOrder = (data: TOrder) => {
  return createResource(data, 'orders');
};
export const deleteClient = (id: string) => {
  return deleteResource(id, 'clients');
};
export const deleteOrder = (id: string) => {
  return deleteResource(id, 'orders');
};
export const getClientByID = (id: string) => {
  return getResourceById(id, 'clients');
};
export const getOrderByID = (id: string) => {
  return getResourceById(id, 'orders');
};
export const updateClient = (data: TClient, id: string) => {
  return updateResource(data, id, 'clients');
};
export const updateOrder = (data: TOrder, id: string) => {
  return updateResource(data, id, 'orders');
};
export const getAllClients = () => {
  return getAllResource('clients');
};
export const getAllOrders = () => {
  return getAllResource('orders');
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
