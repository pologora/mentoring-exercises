import style from './Orders.module.css';
import { Form, Formik } from 'formik';
import orderValidationSchema, {
  OrderFormValues,
} from '../../yupValidationScheemas/orderValidationScheema';
import { createOrder } from '../../Api/ordersService';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getAllClients } from '../../Api/clientsService';
import NotificationAlert from '../NotificationAlert/NotificationAlert';
import { useNotificationContext } from '../../contexts/NotificationContext';
import { NotificationBgColor } from '../../enums/NotificationBgColor';
import FormInput from '../FormElements/FormInput';
import FormSelect from '../FormElements/FormSelect';

const initialValues = {
  client: '',
  quantity: 0,
  title: '',
  content: '',
  paid: false,
};

const AddOrder = () => {
  const { handleChangeNotification } = useNotificationContext();

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
      <Formik
        initialValues={initialValues}
        validationSchema={orderValidationSchema}
        onSubmit={async (values: OrderFormValues, actions) => {
          handleAddOrder(values);
          actions.resetForm();
        }}
      >
        <Form className={style.form}>
          <FormSelect label='Wybierz klienta' name='client' id='client'>
            <option value=''></option>
            {clientsSelectOptions}
          </FormSelect>
          <FormInput
            label='Quantity'
            name='quantity'
            id='quantity'
            type='number'
          />
          <FormInput label='Title' name='title' id='title' />
          <FormInput label='Content' name='content' id='content' />
          <button type='submit'>Add Order</button>
        </Form>
      </Formik>
    </div>
  );
};
export default AddOrder;
