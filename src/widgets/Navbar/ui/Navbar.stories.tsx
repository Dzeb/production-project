import type { Meta, StoryObj } from '@storybook/react';
// import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecotator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'widget/Navbar',
  component: Navbar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
  args: {},
  decorators: [
    (Story) => StoreDecorator({ loginForm: { username: 'admin', password: '12345' } })(Story),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
    (Story) => StoreDecorator({ loginForm: { username: 'admin', password: '12345' } })(Story),
  ],
};
