import * as yup from 'yup';

const schema = yup.object({
  password: yup.string().required(),
  username: yup.string().required(),
});

export type LoginValues = yup.InferType<typeof schema>;

export default schema;
