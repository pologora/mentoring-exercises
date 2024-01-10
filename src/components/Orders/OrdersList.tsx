import { useQuery } from '@tanstack/react-query';

import { getAllOrders } from '../../Api/ordersService';

import OrderCard from './OrderCard';

import style from './Orders.module.css';

const OrdersList = () => {
  const { data, error, isError, isLoading } = useQuery({
    queryFn: getAllOrders,
    queryKey: ['orders'],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  const renderedOrdersList = data?.data.map((order) => (
    <OrderCard key={order.content} order={order} />
  ));

  return <div className={style.orderListContainer}>{renderedOrdersList}</div>;
};
export default OrdersList;
