/* eslint-disable no-magic-numbers */
import { Avatar } from '@mui/material';

import { useUserContext } from '../../contexts/UserContext';
import AccountBalance from '../AccountBalance/AccountBalance';
import Logo from '../Logo/Logo';
import LogOutButton from '../LogOutButton/LogOutButton';
import ThemeSelect from '../ThemeSelect/ThemeSelect';

import style from './Header.module.css';

const Header = () => {
  const { user } = useUserContext();

  return (
    <header className={style.container}>
      <Logo />
      <div className={style.actionButtons}>
        <div>
          <ThemeSelect />
        </div>
        <div className={style.avatarContainer}>
          <AccountBalance />
          {user && <Avatar alt={user.name}>{user.name.slice(0, 2).toUpperCase()}</Avatar>}
          <LogOutButton />
        </div>
      </div>
    </header>
  );
};
export default Header;
