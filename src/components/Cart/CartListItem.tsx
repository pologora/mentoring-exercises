import { Link } from 'react-router-dom';

import { TCartItem } from '../../types/customTypes';

import style from './Cart.module.css';

type CartListItemProps = {
  order: TCartItem;
};

const CartListItem = ({ order }: CartListItemProps) => {
  return (
    <div className={style.orderLinkContainer}>
      <Link to={`/orders/${order.id}`}>{order.title}</Link>
    </div>
  );
};
export default CartListItem;
