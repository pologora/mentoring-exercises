import { Avatar } from '@mui/material';
import Logo from '../Logo/Logo';
import style from './Header.module.css';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useUserContext } from '../../contexts/UserContext';

const Header = () => {
  const { user } = useUserContext();

  return (
    <header className={style.container}>
      <Logo />
      <div className={style.avatarContainer}>
        {user && (
          <Avatar alt={user.name}>{user.name.slice(0, 2).toUpperCase()}</Avatar>
        )}
        <LogOutButton />
      </div>
    </header>
  );
};
export default Header;
