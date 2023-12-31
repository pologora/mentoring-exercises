import { ReactNode } from 'react';
import { UserContextProvider } from '../../contexts/UserContext';
import NotificationContextProvider from '../../contexts/NotificationContext';

type GlobalContextProviderProps = {
  children: ReactNode;
};

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  return (
    <UserContextProvider>
      <NotificationContextProvider>{children}</NotificationContextProvider>
    </UserContextProvider>
  );
};
export default GlobalContextProvider;
