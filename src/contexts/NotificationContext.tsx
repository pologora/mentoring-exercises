import { ReactNode, createContext, useEffect, useState } from 'react';
import { NotificationBgColor } from '../enums/NotificationBgColor';
import { getSafeContext } from './helpers';

type TNotification = {
  text: string;
  bgColor: NotificationBgColor;
};

type NotificationContextProps = {
  setTimeoutDuration: (time: number) => void;
  notification: TNotification;
  isOpen: boolean;
  handleChangeNotification: (
    text: string,
    bgColor: NotificationBgColor
  ) => void;
};

const NotificationContext = createContext<NotificationContextProps | null>(
  null
);

type NotificationContextProviderProps = {
  children: ReactNode;
};

const NotificationContextProvider = ({
  children,
}: NotificationContextProviderProps) => {
  const [notification, setNotification] = useState<TNotification>({
    text: '',
    bgColor: NotificationBgColor.success,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutDuraton, setTimeoutDuration] = useState(2000);

  const handleChangeNotification = (
    text: string,
    bgColor: NotificationBgColor
  ) => {
    setNotification({ text, bgColor });
    setIsOpen(true);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isOpen) {
      timeoutId = setTimeout(() => {
        setIsOpen(false);
      }, timeoutDuraton);
    }

    return () => {
      if (timeoutId) return clearTimeout(timeoutId);
    };
  }, [isOpen, timeoutDuraton]);

  return (
    <NotificationContext.Provider
      value={{
        setTimeoutDuration,
        notification,
        isOpen,
        handleChangeNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
export default NotificationContextProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useNotificationContext = getSafeContext(
  NotificationContext,
  'NotificationContext'
);
// export const useNotificationContext = () => {
//   const context = useContext(NotificationContext);

//   if (!context) {
//     throw new Error(
//       'Missing notification context, it is not wrapped in NotificationContext!'
//     );
//   }

//   return context;
// };
