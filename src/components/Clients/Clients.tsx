import data from '../../data/multipleData';
import ClientsList from './ClientsList';

const Clients = () => {
  return (
    <div>
      <h2>Clients</h2>
      <ClientsList cardsData={data} />
    </div>
  );
};
export default Clients;
