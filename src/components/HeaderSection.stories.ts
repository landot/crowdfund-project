import type { Meta, StoryObj } from '@storybook/react';

import { HeaderSection } from './HeaderSection';

const meta = {
  title: 'HeaderSection',
  component: HeaderSection,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof HeaderSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
