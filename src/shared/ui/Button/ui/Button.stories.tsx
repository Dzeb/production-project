import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecotator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

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
    theme: ButtonTheme.CLEAR,
  },
};

export const ClearInverted: Story = {
  args: {
    children: 'button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const Outline: Story = {
  args: {
    children: 'button',
    theme: ButtonTheme.OUTLINE,
  },
};
export const OutlineSizeL: Story = {
  args: {
    children: 'button',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
};
export const OutlineSizeXL: Story = {
  args: {
    children: 'button',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
};
export const PrimaryDark: Story = {
  args: {
    children: 'button',
  },
  decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
};
export const BackgroundTheme: Story = {
  args: {
    children: 'button',
    theme: ButtonTheme.BACKGROUND,
  },
};
export const InvertedBackground: Story = {
  args: {
    children: 'button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};
export const Square: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
  },
};
export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
};
export const SquareSizeXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
};
