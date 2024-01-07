import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useFormik } from 'formik';

import { createClient } from '../../Api/clientsService';
import { formInputElements } from '../../data/formInputs';
import clientValidationScheema, {
  ClientFormValues,
} from '../../yupValidationScheemas/clientValidationScheema';
import style from './Clients.module.css';
// import { useMutation, useQueryClient } from '@tanstack/react-query';

const AddClient = () => {
  const queryClient = useQueryClient();

  const clientMutation = useMutation({
    mutationFn: (values: ClientFormValues) => {
      return createClient(values);
    },
    onError: () => {
      // eslint-disable-next-line no-console
      console.log('Cos poszlo nie tak');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clients'] });
    },
  });

  const handleAdd = (values: ClientFormValues) => {
    clientMutation.mutate(values);
  };
  const formik = useFormik<ClientFormValues>({
    initialValues: {
      imgSrc: '',
      name: '',
      phoneNumber: '',
      postCode: '',
      street: '',
      subRegion: '',
      surname: '',
      town: '',
    },
    onSubmit: (values: ClientFormValues) => {
      handleAdd(values);
    },
    validationSchema: clientValidationScheema,
  });

  const renderedFormElements = formInputElements.map(({ required, title }) => {
    return (
      <div key={title} className={style.inputContainer}>
        <label className={style.label} htmlFor={title}>
          {`${title} ${required ? '*' : ''}`}
        </label>
        <input
          className={style.input}
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
      <h2>Create client</h2>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        {renderedFormElements}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddClient;
