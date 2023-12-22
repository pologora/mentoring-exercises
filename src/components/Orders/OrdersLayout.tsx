import { Outlet } from 'react-router-dom';
import style from './Orders.module.css';

const OrdersLayout = () => {
  return (
    <div className={style.ordersLayoutContainer}>
      <Outlet />
    </div>
  );
};
export default OrdersLayout;
