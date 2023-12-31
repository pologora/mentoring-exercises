import style from './Orders.module.css';
import OrderCard from './OrderCard';
import { getAllOrders } from '../../Api/ordersService';
import { useQuery } from '@tanstack/react-query';

const OrdersList = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['orders'],
    queryFn: getAllOrders,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  const renderedOrdersList = data?.data.map((order) => (
    <OrderCard order={order} key={order.content} />
  ));

  return <div className={style.orderListContainer}>{renderedOrdersList}</div>;
};
export default OrdersList;
