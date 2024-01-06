import { createContext, useContext, useState } from 'react';
import { TUser } from '../types/customTypes';
// import { getUserByUsername } from '../Api/userApi';
// import { LoginValues } from '../yupValidationScheemas/loginValidationSchema';

type UserContextProps = {
  user: TUser | null;
  logIn: (data: TUser | null) => void;
  logOut: () => void;
  // isLoading: boolean;
  // error: string;
};

const UserContext = createContext<UserContextProps | null>(null);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<TUser | null>(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState('');

  const logOut = () => setUser(null);

  const logIn = async (data: TUser | null) => {
    // try {
    //   setIsLoading(true);
    //   const result = await getUserByUsername(data);
    setUser(data);
    // } catch (error) {
    //   console.log(error);
    //   setError('Wrong name or password');
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <UserContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('Missing userContext, it is not wrapped in UserContext');
  }

  return context;
};
