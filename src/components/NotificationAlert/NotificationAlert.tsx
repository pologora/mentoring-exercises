import { useNotificationContext } from '../../contexts/NotificationContext';

import style from './NotificationAlert.module.css';

const NotificationAlert = () => {
  const { isOpen, notification } = useNotificationContext();
  if (isOpen) {
    return (
      <div className={style.alertContainer} style={{ backgroundColor: notification.bgColor }}>
        {notification.text}
      </div>
    );
  }
};
export default NotificationAlert;
