import type { MenuDataProps } from '../../data/menu';

const AsideMenu = ({ menuData }: { menuData: MenuDataProps[] }) => {
  const menu = menuData.map((item) => (
    <div key={item.link}>
      <span>{item.icon}</span>
      <a href={item.link}>{item.linkName}</a>
    </div>
  ));
  if (menuData.length === 0) {
    return <div>No menu</div>;
  }
  return <div>{menu}</div>;
};
export default AsideMenu;
