import { useQuery } from '@tanstack/react-query';

import { MultiFormValuesType } from '../components/MultiStepForm/MultiFormInitialValues';
import { QUERY_KEYS } from '../constants/constants';
import { TInvoice } from '../types/customTypes';

import {
  createResource,
  deleteResource,
  getAllResource,
  getResourceById,
  updateResource,
} from './resourceService';

export const createInvoice = (data: MultiFormValuesType) => {
  return createResource(data, 'invoices');
};

export const deleteInvoice = (id: string) => {
  return deleteResource(id, 'invoices');
};

export const getInvoiceByID = (id: string) => {
  return getResourceById<TInvoice>(id, 'invoices');
};

export const updateInvoice = (data: MultiFormValuesType, id: string) => {
  return updateResource(data, id, 'invoices');
};

export const getAllInvoices = () => {
  return getAllResource<TInvoice[]>('invoices');
};

export const useGetAllInvoices = () => {
  return useQuery({
    queryFn: getAllInvoices,
    queryKey: QUERY_KEYS.invoices,
  });
};
