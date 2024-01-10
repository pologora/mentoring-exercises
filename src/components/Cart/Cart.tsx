import { useSelector } from 'react-redux';

import { selectOrders } from '../../redux/store';

import CartList from './CartList';

const Cart = () => {
  const orders = useSelector(selectOrders);

  const noOrdersArrayLength = 0;

  if (orders.length === noOrdersArrayLength) {
    return (
      <div>
        <h3>Brak zamówień do opłacenia</h3>
      </div>
    );
  }

  return (
    <div>
      <CartList orders={orders} />
    </div>
  );
};
export default Cart;
