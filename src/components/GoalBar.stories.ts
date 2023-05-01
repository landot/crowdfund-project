import type { Meta, StoryObj } from '@storybook/react';

import { GoalBar } from './GoalBar';

const meta = {
  title: 'GoalBar',
  component: GoalBar,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof GoalBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    goal: 1000,
    progress: 500,
  },
};

export const EmptyBar: Story = {
    args: {
      goal: 1000,
      progress: 0,
    },
  };

export const FilledBar: Story = {
args: {
    goal: 1000,
    progress: 1000,
},
};
