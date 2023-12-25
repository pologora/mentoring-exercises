import { Link } from 'react-router-dom';
import { TOrder } from '../../types/customTypes';
import style from './Orders.module.css';

const OrderCard = ({ order }: { order: TOrder }) => {
  return (
    <Link to={`/orders/${order.id}`} className={style.orderCard}>
      <p>Klient: {order.client}</p>
      <p>Quantity: {order.quantity}</p>
      <p>Title: {order.title}</p>
      <p>Content: {order.content}</p>
    </Link>
  );
};
export default OrderCard;
