import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import { addOrder, removeOrder, selectOrders } from '../../redux/orderSlice';
import { useAppDispatch } from '../../redux/store';
import { TOrder } from '../../types/customTypes';

import style from './Orders.module.css';

const OrderCard = ({ order }: { order: TOrder }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const ordersInCart = useSelector(selectOrders);
  const selectedOrderId = order.id;

  const [isOrderInCart, setIsOrderInCart] = useState(
    ordersInCart.some((item) => item.id === selectedOrderId),
  );

  const addToCart = () => dispatch(addOrder({ id: order.id, title: order.title }));
  const removeFromCart = () => dispatch(removeOrder({ id: order.id, title: order.title }));

  const handleUpdateCartItem = () => {
    if (isOrderInCart) {
      removeFromCart();
    } else {
      addToCart();
    }
  };

  useEffect(() => {
    setIsOrderInCart(ordersInCart.some((item) => item.id === selectedOrderId));
  }, [selectedOrderId, ordersInCart]);

  return (
    <div className={style.orderCard}>
      <p>Klient: {order.client}</p>
      <p>Quantity: {order.quantity}</p>
      <p>Title: {order.title}</p>
      <p>Content: {order.content}</p>
      <p>Opłacone: {order.paid ? 'Tak' : 'Nie'}</p>
      <Button
        fullWidth
        disabled={order.paid}
        size='small'
        variant='outlined'
        onClick={handleUpdateCartItem}
      >
        {isOrderInCart ? 'Remove from Cart' : 'Add to Cart'}
      </Button>
      <Button
        fullWidth
        size='small'
        variant='outlined'
        onClick={() => navigate(`/orders/${order.id}`)}
      >
        Order details
      </Button>
    </div>
  );
};
export default OrderCard;
