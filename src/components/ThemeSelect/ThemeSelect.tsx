import { TTheme, useThemeContext } from '../../contexts/ThemeContext';
import { ChangeEvent } from 'react';
import style from './ThemeSelect.module.css';

const ThemeSelect = () => {
  const { changeTheme } = useThemeContext();

  const handleThemeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as TTheme;
    changeTheme(value);
  };
  return (
    <div className={style.selectContainer}>
      <label htmlFor='theme' onChange={() => handleThemeChange}>
        Choose Theme
      </label>
      <select name='theme' id='theme' onChange={handleThemeChange}>
        <option value='dark'>Dark</option>
        <option value='light'>Light</option>
      </select>
    </div>
  );
};
export default ThemeSelect;
