/* eslint-disable no-magic-numbers */
import * as yup from 'yup';

const schema = yup.object({
  imgSrc: yup.string().url(),
  name: yup.string().required(),
  phoneNumber: yup
    .string()
    .required()
    .matches(/^\+\d{11}$/, 'Phone phone must match the following: +12345678900'),
  postCode: yup
    .string()
    .matches(/^\d{2}-\d{3}$/, 'Post code must match the following: 00-000')
    .required(),
  street: yup.string().required().min(3).required(),
  subRegion: yup.string(),
  surname: yup.string().min(3, 'Surname musi mieć 3 znaki').required('Surname jest wymagany'),
  town: yup.string().min(5).required(),
});

export type ClientFormValues = yup.InferType<typeof schema>;

export default schema;
