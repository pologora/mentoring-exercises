/* eslint-disable no-magic-numbers */
import * as yup from 'yup';

const schema = yup.object({
  client: yup.string().required(),
  content: yup.string().required().min(10),
  paid: yup.boolean().default(false),
  quantity: yup.number().required().min(1).max(15),
  title: yup.string().required().min(5),
});

export type OrderFormValues = yup.InferType<typeof schema>;

export default schema;
