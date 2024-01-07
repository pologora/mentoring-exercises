import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { createUser } from '../../Api/userApi';
import { useUserContext } from '../../contexts/UserContext';
import registerValidationScheema, {
  RegisterFormValues,
} from '../../yupValidationScheemas/registerValidationScheema';
import style from './Auth.module.css';

const Register = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  const formik = useFormik<RegisterFormValues>({
    initialValues: {
      name: '',
      password: '',
      passwordConfirm: '',
      username: '',
    },
    onSubmit: async (values: RegisterFormValues) => {
      const data = {
        name: values.name,
        password: values.password,
        username: values.username,
      };

      await createUser(data);
      navigate('/login');
    },
    validationSchema: registerValidationScheema,
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
          <label className={style.label} htmlFor='name'>
            Name
          </label>
          <input
            className={style.input}
            id='name'
            name='name'
            type='text'
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <p className={style.inputError}>{formik.touched.name && formik.errors.name}</p>
        </div>
        <div className={style.inputContainer}>
          <label className={style.label} htmlFor='username'>
            Username
          </label>
          <input
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
          <p className={style.inputError}>{formik.touched.password && formik.errors.password}</p>
        </div>
        <div className={style.inputContainer}>
          <label className={style.label} htmlFor='passwordConfirm'>
            Repeat password
          </label>
          <input
            autoComplete='current-password'
            className={style.input}
            id='passwordConfirm'
            name='passwordConfirm'
            type='password'
            value={formik.values.passwordConfirm}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
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
