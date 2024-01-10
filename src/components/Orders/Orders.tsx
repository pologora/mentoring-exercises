import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import OrdersList from './OrdersList';

import style from './Orders.module.css';

const Orders = () => {
  const navigate = useNavigate();

  const handleNavigateToCart = () => navigate('/cart');
  return (
    <div>
      <div className={style.buttonsContainer}>
        <Button variant='contained' onClick={() => navigate('/orders/add')}>
          Add new order
        </Button>
        <Button color='secondary' variant='outlined' onClick={handleNavigateToCart}>
          Cart
        </Button>
      </div>
      <OrdersList />
    </div>
  );
};
export default Orders;
