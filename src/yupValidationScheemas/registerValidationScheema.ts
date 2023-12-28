import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required(),
  username: yup.string().required(),
  password: yup.string().required().min(8),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must much'),
});

export type RegisterFormValues = yup.InferType<typeof schema>;
export default schema;
