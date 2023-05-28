import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/"
          className={cls.main_link}
        >
          Main page
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          About page
        </AppLink>
      </div>
    </div>
  );
};
