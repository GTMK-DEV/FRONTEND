// Button.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' }
  }
} as Meta;

// 스토리 타입, StoryObj의 제네릭에 컴포넌트의 타입을 넘겨준다.
type Story = StoryObj<typeof Button>;

export const Large: Story = {
  args: {
    label: 'Large',
    width: '100%',
    height: '64px',
    size: 'lg'
  }
};

export const Medium: Story = {
  args: {
    label: 'Large',
    width: '100%',
    height: '48px',
    size: 'md'
  }
};

export const Small: Story = {
  args: {
    label: 'Small',
    width: '100%',
    height: '32px',
    size: 'sm'
  }
};
