import { useFormik } from 'formik';
import clientValidationScheema from '../../yupValidationScheemas/clientValidationScheema';
import style from './Clients.module.css';
import { formInputElements } from '../../data/formInputs';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getClientByID, updateClient } from '../../Api/clientsService';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { TClient } from '../../types/customTypes';

const initialValues = {
  name: '',
  surname: '',
  street: '',
  postCode: '',
  town: '',
  subRegion: '',
  imgSrc: '',
  phoneNumber: '',
  id: '',
};

const UpdateClient = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { isError, isLoading, data, error } = useQuery({
    queryKey: ['client', id],
    queryFn: () => {
      if (id) {
        return getClientByID(id);
      }
    },
  });

  const formik = useFormik<TClient>({
    initialValues: initialValues,
    validationSchema: clientValidationScheema,
    onSubmit: (values: TClient) => {
      if (id) {
        handleUpdate(values);
      }
    },
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values: TClient) => {
      return updateClient(values, values.id.toString());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clients'] });
      navigate('/clients');
    },
    onError: () => {
      console.log('Cos poszlo nie tak');
    },
  });

  const handleUpdate = (values: TClient) => {
    if (id) {
      mutation.mutate(values);
    }
  };

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

  const renderedFormElements = formInputElements.map(({ title, required }) => {
    return (
      <div key={title} className={style.inputContainer}>
        <label htmlFor={title} className={style.label}>
          {`${title} ${required ? '*' : ''}`}
        </label>
        <input
          id={title}
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
      <h2>Edit client</h2>
      <form onSubmit={formik.handleSubmit} className={style.form}>
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
