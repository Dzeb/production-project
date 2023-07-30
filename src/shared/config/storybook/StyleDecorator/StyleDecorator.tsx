import { FC } from 'react';
import 'app/styles/index.scss';

export const StyleDecorator: FC = ({ children }) => {
  return <div>{children}</div>;
};
