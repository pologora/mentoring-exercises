import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import themes, { setCssVariables } from '../options/themes';

type ThemeContextProviderProps = {
  children: ReactNode;
};

export type TTheme = 'dark' | 'light';

type ThemeContextProps = {
  theme: TTheme;
  changeTheme: (theme: TTheme) => void;
};

const ThemeContext = createContext<ThemeContextProps | null>(null);

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<TTheme>('dark');

  const changeTheme = (theme: TTheme) => {
    setTheme(theme);
  };

  useEffect(() => {
    const newTheme = themes[theme];
    setCssVariables(newTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'Missing themeContext, it is not wrapped in ThemeContextProvider'
    );
  }

  return context;
};
