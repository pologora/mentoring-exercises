import style from './Cart.module.css';
import type { CartItem, ChangeCartItemQuantityAction, Product } from './Cart';

type CartListProps = {
  products: CartItem[];
  removeItemFromCart: (item: Product) => void;
  changeCartItemQuantity: (
    item: Product,
    action: ChangeCartItemQuantityAction
  ) => void;
};

const CartList = ({
  products,
  changeCartItemQuantity,
  removeItemFromCart,
}: CartListProps) => {
  const handleDecreaseItemQuantity = (
    item: Product,
    action: ChangeCartItemQuantityAction,
    quantity: number
  ) => {
    if (quantity === 1 && action === 'decrease') {
      removeItemFromCart(item);
    } else {
      changeCartItemQuantity(item, action);
    }
  };

  const renderedItems = products.map(({ item, quantity }) => {
    const { name, price } = item;
    return (
      <li key={name}>
        <span>{name}</span>
        <span>{price}</span>
        <button
          onClick={() => handleDecreaseItemQuantity(item, 'decrease', quantity)}
        >
          -
        </button>
        <span>{quantity}</span>
        <button onClick={() => changeCartItemQuantity(item, 'increase')}>
          +
        </button>
        <button onClick={() => removeItemFromCart({ name, price })}>
          remove
        </button>
      </li>
    );
  });
  return <ul className={style.productsList}>{renderedItems}</ul>;
};
export default CartList;
