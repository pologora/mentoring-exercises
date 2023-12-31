import { useState } from 'react';
import { menuData } from '../../data/menu';
import style from './AsideMenu.module.css';
import { Link } from 'react-router-dom';

const AsideMenu = () => {
  const [isOpen, setIsOpen] = useState(true);
  const menu = menuData.map((item) => (
    <div key={item.link} className={style.linkContainer}>
      <span className={style.icon}>{item.icon}</span>
      <Link className={style.linkTitle} to={item.link}>
        {item.linkName}
      </Link>
    </div>
  ));

  const toggleMenu = () => setIsOpen((prev) => !prev);

  if (menuData.length === 0) {
    return <div>No menu</div>;
  }
  return (
    <div>
      <button onClick={toggleMenu} className={style.toggleMenuButton}>
        {isOpen ? 'Zamknij menu' : 'Otwórz menu'}
      </button>
      <div className={style.menuContainer}>{isOpen && menu}</div>
    </div>
  );
};
export default AsideMenu;
