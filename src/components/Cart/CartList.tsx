import { TCartItem } from '../../types/customTypes';

import CartListItem from './CartListItem';

import style from './Cart.module.css';

type CartListProps = {
  orders: TCartItem[];
};

const CartList = ({ orders }: CartListProps) => {
  const cartItemsList = orders.map((item) => <CartListItem key={item.id} order={item} />);
  return (
    <div>
      <h2>Items in Cart</h2>
      <div className={style.cartItemsList}>{cartItemsList}</div>
    </div>
  );
};
export default CartList;
