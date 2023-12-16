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

function updateQuantity(
  state: typeof initialState,
  item: Product | undefined,
  quantityModifier: number
) {
  const updatedState = state.map((cartItem) => {
    if (cartItem.item.name === item!.name) {
      return {
        ...cartItem,
        quantity: cartItem.quantity + quantityModifier,
      };
    }
    return cartItem;
  });

  return updatedState;
}

function removeFromCart(state: typeof initialState, item: Product | undefined) {
  return state.filter((product) => product.item.name != item!.name);
}

type ActionType =
  | { type: 'addItem'; payload: Product }
  | { type: 'removeItem'; payload: Product }
  | { type: 'decreaseItemQuantity'; payload: Product }
  | { type: 'increaseItemQuantity'; payload: Product }
  | { type: 'reset'; payload?: undefined };

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
        return updateQuantity(state, item, 1);
      }

      return [...state, { item, quantity: 1 }];
    }

    case 'removeItem': {
      return removeFromCart(state, item);
    }

    case 'decreaseItemQuantity': {
      return updateQuantity(state, item, -1);
    }

    case 'increaseItemQuantity': {
      return updateQuantity(state, item, 1);
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
