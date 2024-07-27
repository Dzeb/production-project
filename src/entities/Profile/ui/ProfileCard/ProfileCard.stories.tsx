import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import Avatar from 'shared/assets/icons/avatar.jpg';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
  args: {
    data: {
      age: 30,
      avatar: Avatar,
      city: 'Moscow',
      country: Country.Russia,
      currency: Currency.RUB,
      lastname: 'Gr',
      username: 'Den',
      first: 'Denis',
    },
  },
  // decorators: (Story) =>
  //   StoreDecorator({ loginForm: { username: 'admin', password: '12345###' } })(Story),
};

export const WithError: Story = {
  args: {
    error: 'true',
  },
  decorators: (Story) =>
    StoreDecorator({
      loginForm: { username: 'admin', password: '12345', error: 'Error' },
    })(Story),
};

export const WithLoading: Story = {
  args: {
    isLoading: true,
  },
  // decorators: (Story) =>
  //   StoreDecorator({
  //     loginForm: { username: 'admin', password: '12345', error: 'Error' },
  //   })(Story),
};
