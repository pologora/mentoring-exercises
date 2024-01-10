import { Route, Routes } from 'react-router-dom';

import AddOrder from './AddOrder';
import Order from './Order';
import Orders from './Orders';
import OrdersLayout from './OrdersLayout';

const OrdersRoutes = () => {
  return (
    <Routes>
      <Route element={<OrdersLayout />}>
        <Route index element={<Orders />} />
        <Route element={<Order />} path=':id' />
        <Route element={<AddOrder />} path='add' />
      </Route>
    </Routes>
  );
};
export default OrdersRoutes;
