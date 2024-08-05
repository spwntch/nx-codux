import { Meta, StoryObj } from '@storybook/react';
import { SubmitButton } from './submit-button';
import { playDefault, playProcessing } from './submit-button.specs';

const componentDescription = `
### Overview
The \`SubmitButton\` component is an enhanced version of the standard \`Button\` component from Shadcn UI. It includes additional functionality to indicate a processing state with a pulsing animation and defaults to displaying "SUBMIT" as its label when no children are provided.

### Props
- \`processing\`: A boolean flag that, when true, applies a pulsing animation to indicate that an action is in progress.
- \`className\`: Additional class name(s) for the button.
- \`...ButtonProps\`: Inherits all props from the base \`Button\` component.

### Example
\`\`\`
<SubmitButton processing={true} className="text-white bg-blue-500">
  Processing...
</SubmitButton>
\`\`\`

### Notes
This button is primarily used in forms or actions that may require user feedback during an asynchronous process. It provides a clear indication that the system is processing the user's request.
`;

const meta: Meta<typeof SubmitButton> = {
  title: 'components/buttons/submit-button',
  component: SubmitButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
  argTypes: {
    processing: {
      description: 'Indicates if the button is in a processing state',
      control: 'boolean',
    },
    className: {
      description: 'Additional class name(s) for the button',
      control: 'text',
    },
    children: {
      description: 'The content of the button',
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SubmitButton>;

/**
 * Default SubmitButton example.
 * Demonstrates the default appearance and behavior of the SubmitButton component.
 */
export const Default: Story = {
  args: {
    processing: false,
    children: 'SUBMIT',
  },
  play: playDefault,
};

/**
 * Processing State.
 * Demonstrates the SubmitButton component when it is in a processing state.
 */
export const Processing: Story = {
  args: {
    processing: true,
    // children: 'Processing...',
    // className: 'text-white bg-blue-500',
  },
  play: playProcessing,
};