import type { Meta, StoryObj } from '@storybook/react';
import { BookmarkButton } from './BookmarkButton';

const meta = {
  title: 'BookmarkButton',
  component: BookmarkButton,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof BookmarkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BookmarkDesktop: Story = {
  args: {isMobile: false},
};

export const BookmarkSmallScreen: Story = {
    args: {isMobile: true},
  };