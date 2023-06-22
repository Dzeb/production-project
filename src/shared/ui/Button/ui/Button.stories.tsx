import type { Meta, StoryObj } from '@storybook/react';

import { Button, ThemeButton } from './Button';
import 'app/styles/index.scss'

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'button'
  },
};

export const Clear: Story = {
  args: {
    children: 'button',
    theme: ThemeButton.CLEAR
  },
  decorators: [(Story) => (
    <div style={{ margin: '3em', backgroundColor: 'red' }}>
      {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
      <Story />
    </div>
  ),]
};

export const Outline: Story = {
  args: {
    children: 'button',
    theme: ThemeButton.OUTLINE
  },
};


