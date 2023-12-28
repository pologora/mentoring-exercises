import { TClient } from '../types/customTypes';
import {
  createResource,
  deleteResource,
  getAllResource,
  getResourceById,
  updateResource,
} from './resourceService';

export const createClient = (data: TClient) => {
  return createResource(data, 'clients');
};

export const deleteClient = (id: string) => {
  return deleteResource(id, 'clients');
};

export const getClientByID = (id: string) => {
  return getResourceById<TClient>(id, 'clients');
};

export const updateClient = (data: TClient, id: string) => {
  return updateResource(data, id, 'clients');
};

export const getAllClients = () => {
  return getAllResource<TClient[]>('clients');
};
