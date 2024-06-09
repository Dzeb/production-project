import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecotator';
import { Theme } from 'app/providers/ThemeProvider';
import { Avatar } from './Avatar';
import AvatarImage from './storybook.jpg';

const meta: Meta<typeof Avatar> = {
  title: 'widget/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    size: 150,
    src: 'https://smart-lab.ru/uploads/2021/images/02/78/63/2021/07/19/4a31b6.jpg',
  },
};

export const Small: Story = {
  args: {
    size: 50,
    src: 'https://smart-lab.ru/uploads/2021/images/02/78/63/2021/07/19/4a31b6.jpg',
  },
};
