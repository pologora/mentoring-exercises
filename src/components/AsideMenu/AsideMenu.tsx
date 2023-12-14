import { useState } from 'react';
import type { MenuDataProps } from '../../data/menu';
import style from './AsideMenu.module.css';

const AsideMenu = ({ menuData }: { menuData: MenuDataProps[] }) => {
  const [isOpen, setIsOpen] = useState(true);
  const menu = menuData.map((item) => (
    <div key={item.link}>
      <span>{item.icon}</span>
      <a href={item.link}>{item.linkName}</a>
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
