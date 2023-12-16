import type { Product } from './Cart';
import style from './Cart.module.css';

const products: Product[] = [
  { name: 'potatoes', price: 10 },
  { name: 'milk', price: 12 },
  { name: 'carrot', price: 8 },
];

type ProductsListProps = {
  addItemToCart: (item: Product) => void;
};

const ProductsList = ({ addItemToCart }: ProductsListProps) => {
  const renderedElements = products.map((product) => {
    const { name, price } = product;
    return (
      <li key={name} className={style.productListItem}>
        <span className={style.productName}>{name}</span>
        <span className={style.productPrice}>${price}</span>
        <button className={style.addBtn} onClick={() => addItemToCart(product)}>
          Add
        </button>
      </li>
    );
  });
  return <ul className={style.productsList}>{renderedElements}</ul>;
};
export default ProductsList;
