import style from './Orders.module.css';
import { useFormik } from 'formik';
import orderValidationSchema, {
  OrderFormValues,
} from '../../yupValidationScheemas/orderValidationScheema';
import { createOrder } from '../../Api/ordersService';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getAllClients } from '../../Api/clientsService';
import NotificationAlert from '../NotificationAlert/NotificationAlert';
import { useNotificationContext } from '../../contexts/NotificationContext';
import { NotificationBgColor } from '../../enums/NotificationBgColor';

const initialValues = {
  client: '',
  quantity: 0,
  title: '',
  content: '',
};

const AddOrder = () => {
  const { handleChangeNotification } = useNotificationContext();
  const formik = useFormik<OrderFormValues>({
    initialValues: initialValues,
    validationSchema: orderValidationSchema,
    onSubmit: async (values: OrderFormValues) => {
      handleAddOrder(values);
      handleClearForm();
    },
  });

  const { isError, isLoading, data, error } = useQuery({
    queryKey: ['clients'],
    queryFn: getAllClients,
  });

  const orderMutation = useMutation({
    mutationFn: (values: OrderFormValues) => {
      return createOrder(values);
    },
    onSuccess: () => {
      handleChangeNotification(
        'Order successfully created',
        NotificationBgColor.success
      );
    },
    onError: () => {
      handleChangeNotification(
        'Unexpected error uccurred',
        NotificationBgColor.error
      );
    },
  });

  const handleAddOrder = (values: OrderFormValues) => {
    orderMutation.mutate(values);
  };

  const handleClearForm = () => {
    formik.resetForm();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  const clientsSelectOptions = data?.data.map((client) => (
    <option
      key={client.id}
      value={client.id}
    >{`${client.name} ${client.surname}`}</option>
  ));

  return (
    <div className={style.addOrderContainer}>
      <NotificationAlert />
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
            Content
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
