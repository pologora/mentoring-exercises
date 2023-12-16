import style from './ChildrenAtBus.module.css';

type ChildrenListProps = {
  children: { age: string; name: string }[];
};

const ChildrenList = ({ children }: ChildrenListProps) => {
  const renderedItems = children.map((child, idx) => (
    <li key={`${child.age}+${child.name}+${idx}`}>
      <span className={style.name}>{child.name}</span>
      <span className={style.age}>{child.age}</span>
    </li>
  ));
  return <ul>{renderedItems}</ul>;
};
export default ChildrenList;
