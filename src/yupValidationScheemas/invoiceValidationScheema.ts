import * as yup from 'yup';

const minPriceValue = 1;

const scheema = yup.object({
  accountingMonth: yup.number().required(),
  client: yup.string().required(),
  date: yup.date().required(),
  orders: yup.array().of(yup.string()).required(),
  price: yup.number().required().min(minPriceValue),
});

export type InvoiceFormValues = yup.InferType<typeof scheema>;
export default scheema;
