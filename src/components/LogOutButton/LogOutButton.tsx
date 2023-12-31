import { useUserContext } from '../../contexts/UserContext';
import style from './LogOutButton.module.css';

const LogOutButton = () => {
  const { user, logOut } = useUserContext();
  return (
    <>
      {user && (
        <button onClick={logOut} className={style.button}>
          Sign out
        </button>
      )}
    </>
  );
};
export default LogOutButton;
