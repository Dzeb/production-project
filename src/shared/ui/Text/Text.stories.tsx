import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecotator';
import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const TitleAndText: Story = {
  args: {
    title: 'Hello',
    text: 'World',
  },
};
export const OnlyText: Story = {
  args: {
    text: 'World',
  },
};
export const OnlyTytle: Story = {
  args: {
    title: 'Hello',
  },
};

export const TitleAndTextDark: Story = {
  args: {
    title: 'Hello',
    text: 'World',
  },
  decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
};
export const OnlyTextDark: Story = {
  args: {
    text: 'World',
  },
  decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
};
export const OnlyTitleDark: Story = {
  args: {
    title: 'Hello',
  },
  decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
};
export const Error: Story = {
  args: {
    title: 'Hello',
    text: 'World',
    theme: TextTheme.ERROR,
  },
};
