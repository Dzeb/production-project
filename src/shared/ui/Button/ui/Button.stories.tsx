import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecotator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'button',
  },
};

export const Clear: Story = {
  args: {
    children: 'button',
    theme: ThemeButton.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: 'button',
    theme: ThemeButton.OUTLINE,
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'button',
  },
  decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
};
