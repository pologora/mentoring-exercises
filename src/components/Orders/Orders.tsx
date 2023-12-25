import { useNavigate } from 'react-router-dom';
import OrdersList from './OrdersList';

const Orders = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/orders/add')}>Add</button>
      <OrdersList />
    </div>
  );
};
export default Orders;
