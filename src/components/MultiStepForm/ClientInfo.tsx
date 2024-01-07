import { TClient } from '../../types/customTypes';
import style from './MultiStepForm.module.css';

type ClientInfoProps = {
  client: TClient;
};

const ClientInfo = ({ client }: ClientInfoProps) => {
  return (
    <div className={style.clientInfo}>
      <p>
        Name:{' '}
        <span>
          {client.name} {client.surname}
        </span>
      </p>
      <p>Phone: {client.phoneNumber}</p>
      <p>City: {client.town}</p>
    </div>
  );
};
export default ClientInfo;
