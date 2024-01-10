import { useSelector } from 'react-redux';

import { selectMoney } from '../../redux/store';

import Deposit from './Deposit';
import Withdraw from './Withdraw';

import style from './Account.module.css';

const Account = () => {
  const money = useSelector(selectMoney);

  return (
    <div className={style.accountContainer}>
      <h2>Balance: {money}</h2>
      <Deposit />
      <Withdraw />
    </div>
  );
};
export default Account;
