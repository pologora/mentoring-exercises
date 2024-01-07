import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '../constants/constants';
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

export const getAllOrdersByClient = (id: string) => {
  const filter = `?client=${id}`;
  return getAllResource<TOrder[]>('orders', filter);
};

export const useGetAllOrdersByClient = (id: string) => {
  return useQuery({
    queryFn: () => getAllOrdersByClient(id),
    queryKey: QUERY_KEYS.ordersByClient,
  });
};

export const markOrderAsPaided = (id: string) => {
  const data = { paid: true };
  return updateResource(data, id, 'orders');
};

export const markOrderAsUnpaided = (id: string) => {
  const data = { paid: false };
  return updateResource(data, id, 'orders');
};
