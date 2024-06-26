import { FC, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
  const { className, to, children, theme = AppLinkTheme.PRIMARY, ...rest } = props;

  return (
    <Link to={to} className={classNames(cls.app_link, {}, [className, cls[theme]])} {...rest}>
      {children}
    </Link>
  );
});
