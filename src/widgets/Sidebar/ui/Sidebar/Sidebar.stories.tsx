import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecotator';
import { Theme } from 'app/providers/ThemeProvider';
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
  decorators: [(Story) => ThemeDecorator(Theme.LIGHT)(Story)],
};

export const Dark: Story = {
  args: {},
  decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
};
