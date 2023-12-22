import { useParams } from 'react-router-dom';

const Order = () => {
  const { id } = useParams();
  return <div>Order id: {id}</div>;
};
export default Order;
