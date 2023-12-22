import { Route, Routes } from 'react-router-dom';
import OrdersLayout from './OrdersLayout';
import Order from './Order';
import Orders from './Orders';
import AddOrder from './AddOrder';

const OrdersRoutes = () => {
  return (
    <Routes>
      <Route element={<OrdersLayout />}>
        <Route index element={<Orders />} />
        <Route path=':id' element={<Order />} />
        <Route path='add' element={<AddOrder />}></Route>
      </Route>
    </Routes>
  );
};
export default OrdersRoutes;
