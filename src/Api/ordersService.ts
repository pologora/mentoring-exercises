import { TOrder } from '../types/customTypes';
import {
  createResource,
  deleteResource,
  getAllResource,
  getResourceById,
  updateResource,
} from './resourceService';

export const createOrder = (data: TOrder) => {
  return createResource(data, 'orders');
};

export const deleteOrder = (id: string) => {
  return deleteResource(id, 'orders');
};

export const getOrderByID = (id: string) => {
  return getResourceById<TOrder>(id, 'orders');
};

export const updateOrder = (data: TOrder, id: string) => {
  return updateResource(data, id, 'orders');
};

export const getAllOrders = () => {
  return getAllResource<TOrder[]>('orders');
};
