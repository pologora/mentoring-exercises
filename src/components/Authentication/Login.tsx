import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getUserByUsername } from '../../Api/userApi';
import { useUserContext } from '../../contexts/UserContext';
import loginValidationScheema, {
  LoginValues,
} from '../../yupValidationScheemas/loginValidationSchema';
import style from './Auth.module.css';

const Login = () => {
  const { logIn: saveUser, user } = useUserContext();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const logIn = async (data: LoginValues) => {
    try {
      setIsLoading(true);
      const result = await getUserByUsername(data);
      saveUser(result);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      saveUser(null);
      setError('Wrong name or password');
    } finally {
      setIsLoading(false);
    }
  };

  const formik = useFormik<LoginValues>({
    initialValues: {
      password: '',
      username: '',
    },
    onSubmit: (values: LoginValues) => {
      logIn(values);
    },
    validationSchema: loginValidationScheema,
  });

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <div className={style.inputContainer}>
          <label className={style.label} htmlFor='username'>
            Username
          </label>
          <input
            autoComplete='username'
            className={style.input}
            id='username'
            name='username'
            type='text'
            value={formik.values.username}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <p className={style.inputError}>{formik.touched.username && formik.errors.username}</p>
        </div>

        <div className={style.inputContainer}>
          <label className={style.label} htmlFor='password'>
            Password
          </label>
          <input
            autoComplete='current-password'
            className={style.input}
            id='password'
            name='password'
            type='password'
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
        </div>
        <p className={style.inputError}>{formik.touched.password && formik.errors.password}</p>
        {error && <p className={style.inputError}>{error}</p>}
        <button disabled={isLoading} type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};
export default Login;
