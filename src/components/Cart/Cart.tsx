import style from './Cart.module.css';
import CartList from './CartList';
import ProductsList from './ProductsList';
import { useReducer } from 'react';

export type Product = {
  name: string;
  price: number;
};

export type CartItem = {
  item: Product;
  quantity: number;
};

export type ChangeCartItemQuantityAction = 'increase' | 'decrease';

type ActionType =
  | { type: 'addItem'; payload: Product }
  | { type: 'removeItem'; payload: Product }
  | { type: 'decreaseItemQuantity'; payload: Product }
  | { type: 'increaseItemQuantity'; payload: Product }
  | { type: 'reset'; payload?: null };

const initialState: CartItem[] = [];

function reducer(
  state: typeof initialState,
  action: ActionType
): typeof initialState {
  const item = action.payload;

  switch (action.type) {
    case 'addItem': {
      if (!item) {
        throw new Error('No item sent to payload');
      }
      const isInCard = state.find((prod) => prod.item.name === item.name);
      if (isInCard) {
        const updatedState = state.map((cartItem) => {
          if (cartItem.item.name === item!.name) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            };
          }

          return cartItem;
        });
        return updatedState;
      }
      return [...state, { item, quantity: 1 }];
    }

    case 'removeItem': {
      return state.filter((product) => product.item.name != item!.name);
    }

    case 'decreaseItemQuantity': {
      const updatedState = state.map((cartItem) => {
        if (cartItem.item.name === item!.name) {
          return {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          };
        }
        return cartItem;
      });

      return updatedState;
    }

    case 'increaseItemQuantity': {
      const updatedState = state.map((cartItem) => {
        if (cartItem.item.name === item!.name) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }

        return cartItem;
      });
      return updatedState;
    }

    case 'reset': {
      return initialState;
    }

    default:
      throw new Error();
  }
}

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItemToCart = (item: Product) => {
    dispatch({ type: 'addItem', payload: item });
  };

  const removeItemFromCart = (item: Product) => {
    dispatch({ type: 'removeItem', payload: item });
  };

  const changeCartItemQuantity = (
    item: Product,
    action: ChangeCartItemQuantityAction
  ) => {
    if (action === 'increase') {
      dispatch({ type: 'increaseItemQuantity', payload: item });
    } else {
      dispatch({ type: 'decreaseItemQuantity', payload: item });
    }
  };

  const resetCart = () => {
    dispatch({ type: 'reset' });
  };

  return (
    <div className={style.container}>
      <h2>Cart</h2>
      <h4>Product List</h4>
      <ProductsList addItemToCart={addItemToCart} />
      <hr />
      <h4>Cart List</h4>
      <CartList
        products={state}
        changeCartItemQuantity={changeCartItemQuantity}
        removeItemFromCart={removeItemFromCart}
      />
      {state.length > 0 && <button onClick={resetCart}>reset</button>}
    </div>
  );
};
export default Cart;
