import { useFormik } from 'formik';
import * as yup from 'yup';
import style from './Auth.module.css';

const loginValidationScheema = yup.object({
  login: yup.string().required(),
  password: yup.string().required(),
});

type FormValues = yup.InferType<typeof loginValidationScheema>;

const Login = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: loginValidationScheema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={style.form}>
        <div className={style.inputContainer}>
          <label htmlFor='login' className={style.label}>
            Login
          </label>
          <input
            type='text'
            name='login'
            id='login'
            className={style.input}
            value={formik.values.login}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p className={style.inputError}>
            {formik.touched.login && formik.errors.login}
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
          />
        </div>
        <p className={style.inputError}>
          {formik.touched.password && formik.errors.password}
        </p>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
export default Login;
