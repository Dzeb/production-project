import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { useTheme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Theme } from "app/providers/ThemeProvider";
import { Button } from "shared/ui/Button/Button";
import { ThemeButton } from "shared/ui/Button/Button";
interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};
