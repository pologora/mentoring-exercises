import { useFormikContext } from 'formik';

import type { TOrder } from '../../types/customTypes';

import { MultiFormValuesType } from './MultiFormInitialValues';

import style from './MultiStepForm.module.css';

type OrderCardProps = {
  order: TOrder;
  isRemovable?: boolean;
};

const OrderCard = ({ isRemovable = true, order }: OrderCardProps) => {
  const { setFieldValue, values } = useFormikContext<MultiFormValuesType>();
  const { orders } = values;
  const isAdded = orders.includes(order);

  const addOrder = () => {
    const newOrdersArray = [...orders, order];
    setFieldValue('orders', newOrdersArray);
  };

  const removeOrder = () => {
    const newOrdersArray = orders.filter((item) => item.id !== order.id);
    setFieldValue('orders', newOrdersArray);
  };

  const handleToggleOrder = () => {
    if (isAdded) {
      removeOrder();
    } else {
      addOrder();
    }
  };

  return (
    <div key={order.title + order.id + order.client} className={style.orderCard}>
      <p>title: {order.title}</p>
      <p>client: {order.client}</p>
      <p>content: {order.content}</p>
      <p>quantity: {order.quantity}</p>
      <p>paid: {order.paid ? 'Yes' : 'No'}</p>
      {isRemovable && (
        <button type='button' onClick={handleToggleOrder}>
          {isAdded ? 'Remove order' : 'Add order'}
        </button>
      )}
    </div>
  );
};
export default OrderCard;
