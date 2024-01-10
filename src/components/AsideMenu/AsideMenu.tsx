import { useState } from 'react';
import { Link } from 'react-router-dom';

import { menuData } from '../../data/menu';

import style from './AsideMenu.module.css';

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

  const zeroArrayLength = 0;

  if (menuData.length === zeroArrayLength) {
    return <div>No menu</div>;
  }
  return (
    <div>
      <button className={style.toggleMenuButton} onClick={toggleMenu}>
        {isOpen ? 'Zamknij menu' : 'Otwórz menu'}
      </button>
      <div className={style.menuContainer}>{isOpen && menu}</div>
    </div>
  );
};
export default AsideMenu;
