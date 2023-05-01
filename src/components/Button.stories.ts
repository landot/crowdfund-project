import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BackThisProject: Story = {
  args: {
    color: '#FFFFFF',
    label: 'Back this project',
    backgroundColor: '#3CB3AB',
    hoverColor: '#147A73'
  },
};

export const SelectReward: Story = {
  args: {
    color: '#FFFFFF',
    label: 'Select Reward',
    backgroundColor: '#3CB3AB',
    hoverColor: '#147A73'
  },
};

export const OutOfStock: Story = {
  args: {
    color: '#FFFFFF',
    label: 'Out of stock',
    backgroundColor: '#979797',
  },
};
