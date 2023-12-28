import axios, { AxiosError } from 'axios';

const baseURL = 'http://localhost:3000';

const defaultUrls = {
  clients: '/clients',
  orders: '/orders',
};

type ResourseType = 'clients' | 'orders';

export const createResource = async <T>(data: T, resourse: ResourseType) => {
  try {
    axios.defaults.baseURL = baseURL + defaultUrls[resourse];
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

export const deleteResource = async (id: string, resourse: ResourseType) => {
  try {
    axios.defaults.baseURL = baseURL + defaultUrls[resourse];
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

export const getResourceById = async <T>(
  id: string,
  resourse: ResourseType
) => {
  try {
    axios.defaults.baseURL = baseURL + defaultUrls[resourse];
    const res = await axios.get<T>(`/${id}`);
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

export const updateResource = async <T>(
  data: T,
  id: string,
  resourse: ResourseType
) => {
  try {
    axios.defaults.baseURL = baseURL + defaultUrls[resourse];
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

export const getAllResource = async <T>(resourse: ResourseType) => {
  try {
    axios.defaults.baseURL = baseURL + defaultUrls[resourse];
    const res = await axios.get<T>(`/`);
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
