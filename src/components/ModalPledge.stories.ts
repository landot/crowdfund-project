import type { Meta, StoryObj } from '@storybook/react';

import { ModalPledge } from './ModalPledge';

const meta = {
  title: 'ModalPledge',
  component: ModalPledge,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ModalPledge>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    isSelected: false,
    handleClick: undefined,
    index: 0,
    pledge: {
      name: 'Bamboo Stand',
      minimumCost: 25,
      pledgesLeft: 101,
      description: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.`
    }
  },
};

export const ActiveSelectedPledge: Story = {
  args: {
    isSelected: true,
    handleClick: undefined,
    index: 0,
    pledge: {
      name: 'Bamboo Stand',
      minimumCost: 25,
      pledgesLeft: 101,
      description: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.`
    }
  },
};

export const OutOfStockPledge: Story = {
  args: {
    isSelected: false,
    handleClick: undefined,
    index: 0,
    pledge: {
      name: 'Bamboo Stand',
      minimumCost: 25,
      pledgesLeft: 0,
      description: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.`
    }
  }
};
