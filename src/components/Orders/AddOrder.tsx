import style from './Orders.module.css';
import clientsData from '../../data/multipleData';
import { useFormik } from 'formik';
import * as yup from 'yup';

const addOrderValidationSchema = yup.object({
  client: yup.string().required(),
  quantity: yup.number().required().min(1).max(15),
  title: yup.string().required().min(5),
  content: yup.string().required().min(10),
});

type FormValues = yup.InferType<typeof addOrderValidationSchema>;

const AddOrder = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      client: '',
      quantity: 0,
      title: '',
      content: '',
    },
    validationSchema: addOrderValidationSchema,
    onSubmit: (values: FormValues) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const clientsSelectOptions = clientsData.map((client) => (
    <option
      key={client.phoneNumber}
      value={client.phoneNumber}
    >{`${client.name} ${client.surname}`}</option>
  ));

  return (
    <div className={style.addOrderContainer}>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <div className={style.inputContainer}>
          <label htmlFor='client' className={style.label}>
            Wybierz klienta
          </label>
          <select
            name='client'
            id='client'
            value={formik.values.client}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value=''></option>
            {clientsSelectOptions}
          </select>
          <p className={style.inputError}>
            {formik.touched.client && formik.errors.client}
          </p>
        </div>
        <div className={style.inputContainer}>
          <label className={style.label} htmlFor='quantity'>
            Quantity
          </label>
          <input
            className={style.input}
            type='number'
            name='quantity'
            id='quantity'
            value={formik.values.quantity}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p className={style.inputError}>
            {formik.touched.quantity && formik.errors.quantity}
          </p>
        </div>
        <div className={style.inputContainer}>
          <label className={style.label} htmlFor='title'>
            Title
          </label>
          <input
            className={style.input}
            type='text'
            name='title'
            id='title'
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p className={style.inputError}>
            {formik.touched.title && formik.errors.title}
          </p>
        </div>
        <div className={style.inputContainer}>
          <label className={style.label} htmlFor='content'>
            Quantity
          </label>
          <input
            className={style.input}
            type='text'
            name='content'
            id='content'
            value={formik.values.content}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p className={style.inputError}>
            {formik.touched.content && formik.errors.content}
          </p>
        </div>
        <button type='submit'>Add Order</button>
      </form>
    </div>
  );
};
export default AddOrder;
