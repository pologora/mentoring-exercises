import { useOutletContext, useParams } from 'react-router-dom';

const Client = () => {
  const { id } = useParams();
  const { hi }: { hi: string } = useOutletContext();
  return (
    <div>
      <h3>
        Client {id}
        {hi}
      </h3>
    </div>
  );
};
export default Client;
