import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import userAvatar from '../../assets/icons/avatar.jpg';

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
    src: userAvatar,
  },
};

export const Small: Story = {
  args: {
    size: 50,
    src: userAvatar,
  },
};
