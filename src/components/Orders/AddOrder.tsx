import { MenuItem } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { Form, Formik } from 'formik';

import { useGetAllClients } from '../../Api/clientsService';
import { createOrder } from '../../Api/ordersService';
import { useNotificationContext } from '../../contexts/NotificationContext';
import { NotificationBgColor } from '../../enums/NotificationBgColor';
import orderValidationSchema, {
  OrderFormValues,
} from '../../yupValidationScheemas/orderValidationScheema';
import FormInput from '../FormElements/FormInput';
import FormSelect from '../FormElements/FormSelect';
import NotificationAlert from '../NotificationAlert/NotificationAlert';

import style from './Orders.module.css';

const initialValues = {
  client: '',
  content: '',
  paid: false,
  quantity: 0,
  title: '',
};

const AddOrder = () => {
  const { handleChangeNotification } = useNotificationContext();

  const { data, error, isError, isLoading } = useGetAllClients();

  const orderMutation = useMutation({
    mutationFn: (values: OrderFormValues) => {
      return createOrder(values);
    },
    onError: () => {
      handleChangeNotification('Unexpected error uccurred', NotificationBgColor.error);
    },
    onSuccess: () => {
      handleChangeNotification('Order successfully created', NotificationBgColor.success);
    },
  });

  const handleAddOrder = (values: OrderFormValues) => {
    orderMutation.mutate(values);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  const clientsSelectOptions = data?.data.map((client) => (
    <MenuItem key={client.id} value={client.id}>{`${client.name} ${client.surname}`}</MenuItem>
  ));

  return (
    <div className={style.addOrderContainer}>
      <NotificationAlert />
      <Formik
        initialValues={initialValues}
        validationSchema={orderValidationSchema}
        onSubmit={async (values: OrderFormValues, actions) => {
          handleAddOrder(values);
          actions.resetForm();
        }}
      >
        <Form className={style.form}>
          <FormSelect id='client' label='Wybierz klienta' name='client'>
            {clientsSelectOptions}
          </FormSelect>
          <FormInput label='Quantity' name='quantity' type='number' />
          <FormInput label='Title' name='title' />
          <FormInput label='Content' name='content' />
          <button type='submit'>Add Order</button>
        </Form>
      </Formik>
    </div>
  );
};
export default AddOrder;
