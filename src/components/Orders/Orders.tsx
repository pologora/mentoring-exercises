import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/orders/add')}>Add</button>
    </div>
  );
};
export default Orders;
