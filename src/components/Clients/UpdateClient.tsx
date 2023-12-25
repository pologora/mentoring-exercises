import { useFormik } from 'formik';
import clientValidationScheema from '../../yupValidationScheemas/clientValidationScheema';
import style from './Clients.module.css';
import { formInputElements } from '../../data/formInputs';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TClient } from '../../types/customTypes';
import { getClientByID, updateClient } from '../../Api/resourceService';

const initialValues = {
  name: '',
  surname: '',
  street: '',
  postCode: '',
  town: '',
  subRegion: '',
  imgSrc: '',
  phoneNumber: '',
};

const UpdateClient = () => {
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const getClient = async (id: string) => {
    setIsLoading(true);
    try {
      const { data }: { data: TClient } = await getClientByID(id);
      formik.setValues(data);
    } catch (error) {
      setError('Cant get client data');
    } finally {
      setIsLoading(false);
    }
  };

  const formik = useFormik<TClient>({
    initialValues: initialValues,
    validationSchema: clientValidationScheema,
    onSubmit: (values: TClient) => {
      if (id) {
        updateClient(values, id);
      }
    },
  });

  useEffect(() => {
    if (id) {
      getClient(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
