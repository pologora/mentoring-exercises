import * as yup from 'yup';

import { MONTH_LIST } from '../constants/constants';

export const step1Schema = yup.object({
  client: yup.object().shape({
    id: yup.string().required(),
  }),
});

const minOrdersQuantityInOrdersArray = 1;
export const step2Schema = yup.object({
  orders: yup.array().min(minOrdersQuantityInOrdersArray).required(),
});

const minInvoicePrice = 1000;
export const step3Schema = yup.object({
  date: yup.date().required(),
  month: yup.string().required().oneOf(MONTH_LIST, 'Invalid month selection'),
  price: yup.number().required().min(minInvoicePrice),
});

export type Step1FormValues = yup.InferType<typeof step1Schema>;
export type Step2FormValues = yup.InferType<typeof step2Schema>;
export type Step3FormValues = yup.InferType<typeof step3Schema>;
