import * as yup from 'yup';

const minPasswordLength = 8;
const schema = yup.object({
  name: yup.string().required(),
  password: yup.string().required().min(minPasswordLength),
  passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Passwords must much'),
  username: yup.string().required(),
});

export type RegisterFormValues = yup.InferType<typeof schema>;
export default schema;
