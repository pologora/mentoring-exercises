import style from './Cart.module.css';

type ProductProps = {
  product: { name: string; price: string };
};

const Product = ({ product: { name, price } }: ProductProps) => {
  return (
    <div className={style.product}>
      <span>{name}</span>
      <span>{price}</span>
    </div>
  );
};

export default Product;
