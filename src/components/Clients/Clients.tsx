import { useOutletContext } from 'react-router-dom';

const Clients = () => {
  const obj: { hi: string } = useOutletContext();
  return (
    <div>
      <h2>Clients</h2>
      <h2>{obj.hi}</h2>
    </div>
  );
};
export default Clients;
