import * as yup from 'yup';

const scheema = yup.object({
  client: yup.string().required(),
  orders: yup.array().of(yup.string()).required(),
  price: yup.number().required(),
  date: yup.date().required(),
  accountingMonth: yup.number(),
});

export type InvoiceFormValues = yup.InferType<typeof scheema>;
export default scheema;
