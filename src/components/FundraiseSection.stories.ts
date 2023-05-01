import type { Meta, StoryObj } from '@storybook/react';

import { FundraiseSection } from './FundraiseSection';

const meta = {
  title: 'FundraiseSection',
  component: FundraiseSection,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FundraiseSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
