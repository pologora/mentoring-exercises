import { ReactNode } from 'react';
import { UserContextProvider } from '../../contexts/UserContext';
import NotificationContextProvider from '../../contexts/NotificationContext';
import ThemeContextProvider from '../../contexts/ThemeContext';

type GlobalContextProviderProps = {
  children: ReactNode;
};

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  return (
    <UserContextProvider>
      <NotificationContextProvider>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </NotificationContextProvider>
    </UserContextProvider>
  );
};
export default GlobalContextProvider;
