import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'widget/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
  args: {},
  decorators: [
    (Story) => ThemeDecorator(Theme.LIGHT)(Story),
    (Story) => StoreDecorator({ user: { authData: {} } })(Story),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
    (Story) => StoreDecorator({ user: { authData: {} } })(Story),
  ],
};

export const NoAuth: Story = {
  args: {},
  decorators: [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
    (Story) => StoreDecorator({ user: {} })(Story),
  ],
};
