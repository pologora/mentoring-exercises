import { useFormik } from 'formik';
import * as yup from 'yup';
import style from './Clients.module.css';
import { formInputElements } from '../../data/formInputs';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../../data/multipleData';
import { useEffect } from 'react';

const addClientValidation = yup.object({
  name: yup.string().required(),
  surname: yup
    .string()
    .min(3, 'Surname musi mieć 3 znaki')
    .required('Surname jest wymagany'),
  street: yup.string().required().min(3).required(),
  post: yup
    .string()
    .matches(/^\d{2}-\d{3}$/, 'Post code must match the following: 00-000')
    .required(),
  city: yup.string().min(5).required(),
  region: yup.string(),
  img: yup.string(),
  phone: yup
    .string()
    .required()
    .matches(
      /^\+\d{11}$/,
      'Phone phone must match the following: +12345678900'
    ),
});

export type FormValues = yup.InferType<typeof addClientValidation>;

function getInitialValues(client: (typeof data)[0] | undefined): FormValues {
  let initialValues = {
    name: '',
    surname: '',
    street: '',
    post: '',
    city: '',
    region: '',
    img: '',
    phone: '',
  };

  if (client) {
    initialValues = {
      name: client.name,
      surname: client.surname,
      street: client.street,
      post: client.postCode,
      city: client.town,
      region: client.subRegion,
      phone: client.phoneNumber,
      img: client.imgSrc,
    };
  }

  return initialValues;
}

const AddClient = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const client = data.find((item) => item.id.toString() === id);

  const formik = useFormik<FormValues>({
    initialValues: getInitialValues(client),
    validationSchema: addClientValidation,
    onSubmit: (values: FormValues) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  // const formFields: (keyof FormValues)[] = addClientValidation._nodes;

  useEffect(() => {
    formik.setValues(getInitialValues(client));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const title = id ? 'Edit client' : 'Create client';

  const updateButtons = id ? (
    <div>
      <button type='button' onClick={() => navigate(-1)}>
        Cancel
      </button>
      <button type='submit' onClick={() => alert('updated')}>
        Update
      </button>
    </div>
  ) : (
    <button type='submit'>Submit</button>
  );

  const renderedFormElements = formInputElements.map(({ title, required }) => {
    return (
      <div key={title} className={style.inputContainer}>
        <label htmlFor={title} className={style.label}>
          {`${title} ${required ? '*' : ''}`}
        </label>
        <input
          className={style.input}
          name={title}
          onChange={formik.handleChange}
          value={formik.values[title]}
          onBlur={formik.handleBlur}
        />
        <p className={style.inputError}>
          {formik.touched[title] && formik.errors[title]}
        </p>
      </div>
    );
  });

  return (
    <div>
      <h2>{title}</h2>
      <form onSubmit={formik.handleSubmit} className={style.form}>
        {renderedFormElements}
        {updateButtons}
      </form>
    </div>
  );
};
export default AddClient;
