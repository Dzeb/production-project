import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'shared/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Normal: Story = {
  args: {
    width: '100%',
    height: '200px',
  },
};

export const Circle: Story = {
  args: {
    border: '50%',
    width: '100px',
    height: '100px',
  },
};

export const NormalDark: Story = {
  args: {
    width: '100%',
    height: '200px',
  },
  decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
};

export const CircleDark: Story = {
  args: {
    border: '50%',
    width: '100px',
    height: '100px',
  },
  decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
};
