import { useFormikContext } from 'formik';

import { useGetAllOrdersByClient } from '../../Api/ordersService';
import { FormikStepProps } from '../../types/customInterfaces';
import { MultiFormValuesType } from './MultiFormInitialValues';
import OrdersList from './OrdersList';

const Step2 = ({ label }: FormikStepProps) => {
  const { isValid, values } = useFormikContext<MultiFormValuesType>();
  const { data, error, isError, isLoading } = useGetAllOrdersByClient(values.client.id);
  const unpaidOrders = data?.data.filter((order) => !order.paid) || [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h2>{label}</h2>
      {data?.data && <OrdersList orders={unpaidOrders} />}
      {!isValid ? <p className='error'>Choose order</p> : null}
    </div>
  );
};
export default Step2;
