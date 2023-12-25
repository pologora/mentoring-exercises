import { useEffect, useState } from 'react';
import { getAllOrders } from '../../Api/resourceService';
import { TOrder } from '../../types/customTypes';
import style from './Orders.module.css';
import OrderCard from './OrderCard';

const OrdersList = () => {
  const [orders, setOrders] = useState<TOrder[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchOrders = async () => {
    try {
      setIsLoading(true);
      const { data } = await getAllOrders();
      setOrders(data);
    } catch (error) {
      setError(
        'An error occurred while fetching orders. Please try again later.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const renderedOrdersList = orders.map((order) => <OrderCard order={order} />);

  return <div className={style.orderListContainer}>{renderedOrdersList}</div>;
};
export default OrdersList;
