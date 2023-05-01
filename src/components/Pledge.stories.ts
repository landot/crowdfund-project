import type { Meta, StoryObj } from '@storybook/react';

import { Pledge } from './Pledge';

const meta = {
  title: 'Pledge',
  component: Pledge,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Pledge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ActivePledge: Story = {
  args: {
    name: 'Bamboo Stand',
    minimumCost: 25,
    pledgesLeft: 101,
    description: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.`
  },
};

export const OutOfStockPledge: Story = {
    args: {
      name: 'Mahogany Special Edition',
      minimumCost: 200,
      pledgesLeft: 0,
      description: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.`
    },
  };
