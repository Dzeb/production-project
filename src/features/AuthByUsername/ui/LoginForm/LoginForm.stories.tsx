import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { RouteDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'feature/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {},
  decorators: (Story) =>
    StoreDecorator({ loginForm: { username: 'admin', password: '12345' } })(Story),
};

export const WithError: Story = {
  args: {},
  decorators: (Story) =>
    StoreDecorator({ loginForm: { username: 'admin', password: '12345', error: 'Error' } })(Story),
};
