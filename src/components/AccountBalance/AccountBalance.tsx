import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectMoney } from '../../redux/store';

const AccountBalance = () => {
  const money = useSelector(selectMoney);

  return (
    <div>
      <Link to={'/money'}>Balance: {money}</Link>
    </div>
  );
};
export default AccountBalance;
