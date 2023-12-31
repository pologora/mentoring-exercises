import { useFormik } from 'formik';
import style from './Auth.module.css';
import loginValidationScheema, {
  LoginValues,
} from '../../yupValidationScheemas/loginValidationSchema';
import { useUserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = () => {
  const { user, logIn, isLoading, error } = useUserContext();
  const navigate = useNavigate();

  const formik = useFormik<LoginValues>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginValidationScheema,
    onSubmit: (values: LoginValues) => {
      logIn(values);
    },
  });

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={style.form}>
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
            autoComplete='username'
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
            autoComplete='current-password'
            className={style.input}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <p className={style.inputError}>
          {formik.touched.password && formik.errors.password}
        </p>
        {error && <p className={style.inputError}>{error}</p>}
        <button type='submit' disabled={isLoading}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default Login;
