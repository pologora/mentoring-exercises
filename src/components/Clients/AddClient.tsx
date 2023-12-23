import { useFormik } from 'formik';
import clientValidationScheema from '../../yupValidationScheemas/clientValidationScheema';
import style from './Clients.module.css';
import { formInputElements } from '../../data/formInputs';
import { TClient } from '../../types/customTypes';
import { createClient } from '../../Api/clientsApi';

const AddClient = () => {
  const formik = useFormik<TClient>({
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
    onSubmit: (values: TClient) => {
      createClient(values);
    },
  });

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
