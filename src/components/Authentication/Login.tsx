import { useFormik } from 'formik';
import style from './Auth.module.css';
import loginValidationScheema, {
  LoginValues,
} from '../../yupValidationScheemas/loginValidationSchema';
import { useUserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserByUsername } from '../../Api/userApi';

const Login = () => {
  const { user, logIn: saveUser } = useUserContext();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const logIn = async (data: LoginValues) => {
    try {
      setIsLoading(true);
      const result = await getUserByUsername(data);
      saveUser(result);
    } catch (error) {
      console.log(error);
      saveUser(null);
      setError('Wrong name or password');
    } finally {
      setIsLoading(false);
    }
  };

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
