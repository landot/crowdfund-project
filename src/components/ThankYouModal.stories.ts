import type { Meta, StoryObj } from '@storybook/react';

import { ThankYouModal } from './ThankYouModal';

const meta = {
  title: 'ThankYouModal',
  component: ThankYouModal,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ThankYouModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

