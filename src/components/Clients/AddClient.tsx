import { useFormik } from 'formik';
import clientValidationScheema, {
  ClientFormValues,
} from '../../yupValidationScheemas/clientValidationScheema';
import style from './Clients.module.css';
import { formInputElements } from '../../data/formInputs';
import { createClient } from '../../Api/clientsService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { useMutation, useQueryClient } from '@tanstack/react-query';

const AddClient = () => {
  const formik = useFormik<ClientFormValues>({
    initialValues: {
      name: '',
      surname: '',
      street: '',
      postCode: '',
      town: '',
      subRegion: '',
      imgSrc: '',
      phoneNumber: '',
    },
    validationSchema: clientValidationScheema,
    onSubmit: (values: ClientFormValues) => {
      handleAdd(values);
    },
  });

  const queryClient = useQueryClient();

  const clientMutation = useMutation({
    mutationFn: (values: ClientFormValues) => {
      return createClient(values);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clients'] });
    },
    onError: () => {
      console.log('Cos poszlo nie tak');
    },
  });

  const handleAdd = (values: ClientFormValues) => {
    clientMutation.mutate(values);
  };

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
      <h2>Create client</h2>
      <form onSubmit={formik.handleSubmit} className={style.form}>
        {renderedFormElements}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddClient;
