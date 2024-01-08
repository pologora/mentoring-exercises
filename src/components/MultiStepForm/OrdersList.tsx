import { TOrder } from '../../types/customTypes';

import OrderCard from './OrderCard';

import style from './MultiStepForm.module.css';

type OrdersListType = {
  orders: TOrder[];
  isRemovable?: boolean;
};

const OrdersList = ({ isRemovable = true, orders }: OrdersListType) => {
  const renderedOrders = orders.map((item) => (
    <OrderCard key={item.content + item.id} isRemovable={isRemovable} order={item} />
  ));

  return <div className={style.ordersList}>{renderedOrders}</div>;
};
export default OrdersList;
