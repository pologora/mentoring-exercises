/* eslint-disable no-magic-numbers */
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getClientByID, updateClient } from '../../Api/clientsService';
import { formInputElements } from '../../data/formInputs';
import { TClient } from '../../types/customTypes';
import clientValidationScheema from '../../yupValidationScheemas/clientValidationScheema';
import style from './Clients.module.css';

const initialValues = {
  id: '',
  imgSrc: '',
  name: '',
  phoneNumber: '',
  postCode: '',
  street: '',
  subRegion: '',
  surname: '',
  town: '',
};

const UpdateClient = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, error, isError, isLoading } = useQuery({
    queryFn: () => {
      if (id) {
        return getClientByID(id);
      }
    },
    queryKey: ['client', id],
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values: TClient) => {
      return updateClient(values, values.id.toString());
    },
    onError: () => {
      // eslint-disable-next-line no-console
      console.log('Cos poszlo nie tak');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clients'] });
      navigate('/clients');
    },
  });

  const handleUpdate = (values: TClient) => {
    if (id) {
      mutation.mutate(values);
    }
  };

  const formik = useFormik<TClient>({
    initialValues: initialValues,
    onSubmit: (values: TClient) => {
      if (id) {
        handleUpdate(values);
      }
    },
    validationSchema: clientValidationScheema,
  });

  useEffect(() => {
    if (data) {
      formik.setValues(data.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  const renderedFormElements = formInputElements.map(({ required, title }) => {
    return (
      <div key={title} className={style.inputContainer}>
        <label className={style.label} htmlFor={title}>
          {`${title} ${required ? '*' : ''}`}
        </label>
        <input
          className={style.input}
          id={title}
          name={title}
          value={formik.values[title]}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        <p className={style.inputError}>{formik.touched[title] && formik.errors[title]}</p>
      </div>
    );
  });

  return (
    <div>
      <h2>Edit client</h2>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        {renderedFormElements}
        <div>
          <button type='button' onClick={() => navigate(-1)}>
            Cancel
          </button>
          <button type='submit' onClick={() => alert('updated')}>
            Update
          </button>
        </div>
      </form>
    </div>
  );
};
export default UpdateClient;
