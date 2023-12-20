import { useParams } from 'react-router-dom';

const EditClient = () => {
  const { id } = useParams();
  return <div>EditClient: {id}</div>;
};
export default EditClient;
