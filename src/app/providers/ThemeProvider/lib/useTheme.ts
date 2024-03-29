import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface useThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): useThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

  const toggleTheme = () => {
    setTheme(newTheme);
    document.body.className = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};
