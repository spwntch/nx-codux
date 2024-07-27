// input.stories.tsx

import { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

/**
 * Overview
 * The `Input` component is a basic form input element with various styles applied. It supports all standard
 * HTML input attributes.
 * 
 * ### Props
 * - `className`: Additional classes to style the input element.
 * - `type`: The type of the input element.
 * 
 * ### Example
 * ```jsx
 * <Input type="text" placeholder="Enter text" />
 * ```
 */
const meta: Meta<typeof Input> = {
  title: 'shadcn-ui/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    className: {
      description: 'Additional classes to style the input element',
      control: 'text',
    },
    type: {
      description: 'The type of the input element',
      control: 'text',
    },
    placeholder: {
      description: 'Placeholder text for the input element',
      control: 'text',
    },
    disabled: {
      description: 'Whether the input element is disabled',
      control: 'boolean',
    },
  },
  args: {
    className: '',
    type: 'text',
    placeholder: 'Enter text',
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

/**
 * Default story for the Input component.
 * 
 * Displays the Input component with default properties.
 * Use this story to understand the basic usage of the Input component.
 */
export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text',
  },
};

/**
 * Disabled story for the Input component.
 * 
 * Displays the Input component in a disabled state.
 */
export const Disabled: Story = {
  args: {
    type: 'text',
    placeholder: 'Disabled input',
    disabled: true,
  },
};

/**
 * Password story for the Input component.
 * 
 * Displays the Input component with type set to password.
 */
export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
};