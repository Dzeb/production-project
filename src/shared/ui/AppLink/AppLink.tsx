import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className,
    to,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...rest
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.app_link, {}, [className, cls[theme]])}
      {...rest}
    >
      {children}
    </Link>
  );
};
