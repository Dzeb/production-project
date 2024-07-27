import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Normal: Story = {
  args: {},
  decorators: [
    (Story) => ThemeDecorator(Theme.LIGHT)(Story),
    (Story) =>
      StoreDecorator({
        profile: {
          data: {
            age: 30,
            city: 'Moscow',
            country: Country.Russia,
            currency: Currency.RUB,
            lastname: 'Gr',
            username: 'Den',
            first: 'Denis',
          },
        },
      })(Story),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
    (Story) =>
      StoreDecorator({
        profile: {
          form: {
            age: 30,
            city: 'Moscow',
            country: Country.Russia,
            currency: Currency.RUB,
            lastname: 'Gr',
            username: 'Den',
            first: 'Denis',
          },
        },
      })(Story),
  ],
};
