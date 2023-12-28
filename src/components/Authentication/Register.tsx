import { useFormik } from 'formik';
import style from './Auth.module.css';
import registerValidationScheema, {
  RegisterFormValues,
} from '../../yupValidationScheemas/registerValidationScheema';

const Register = () => {
  const formik = useFormik<RegisterFormValues>({
    initialValues: {
      name: '',
      username: '',
      password: '',
      passwordConfirm: '',
    },
    validationSchema: registerValidationScheema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={style.form}>
        <div className={style.inputContainer}>
          <label htmlFor='name' className={style.label}>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            className={style.input}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p className={style.inputError}>
            {formik.touched.name && formik.errors.name}
          </p>
        </div>
        <div className={style.inputContainer}>
          <label htmlFor='username' className={style.label}>
            Username
          </label>
          <input
            type='text'
            name='username'
            id='username'
            className={style.input}
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p className={style.inputError}>
            {formik.touched.username && formik.errors.username}
          </p>
        </div>
        <div className={style.inputContainer}>
          <label htmlFor='password' className={style.label}>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            className={style.input}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete='current-password'
          />
          <p className={style.inputError}>
            {formik.touched.password && formik.errors.password}
          </p>
        </div>
        <div className={style.inputContainer}>
          <label htmlFor='passwordConfirm' className={style.label}>
            Repeat password
          </label>
          <input
            type='password'
            name='passwordConfirm'
            id='passwordConfirm'
            className={style.input}
            value={formik.values.passwordConfirm}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete='current-password'
          />
          <p className={style.inputError}>
            {formik.touched.passwordConfirm && formik.errors.passwordConfirm}
          </p>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
export default Register;
