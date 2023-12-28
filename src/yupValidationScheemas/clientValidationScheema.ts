import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required(),
  surname: yup
    .string()
    .min(3, 'Surname musi mieć 3 znaki')
    .required('Surname jest wymagany'),
  street: yup.string().required().min(3).required(),
  postCode: yup
    .string()
    .matches(/^\d{2}-\d{3}$/, 'Post code must match the following: 00-000')
    .required(),
  town: yup.string().min(5).required(),
  subRegion: yup.string(),
  imgSrc: yup.string().url(),
  phoneNumber: yup
    .string()
    .required()
    .matches(
      /^\+\d{11}$/,
      'Phone phone must match the following: +12345678900'
    ),
});

export type ClientFormValues = yup.InferType<typeof schema>;

export default schema;
