import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import NotificationContextProvider from '../../contexts/NotificationContext';
import ThemeContextProvider from '../../contexts/ThemeContext';
import { UserContextProvider } from '../../contexts/UserContext';
import { store } from '../../redux/store';

type GlobalContextProviderProps = {
  children: ReactNode;
};

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <NotificationContextProvider>
          <ThemeContextProvider>{children}</ThemeContextProvider>
        </NotificationContextProvider>
      </UserContextProvider>
    </Provider>
  );
};
export default GlobalContextProvider;
