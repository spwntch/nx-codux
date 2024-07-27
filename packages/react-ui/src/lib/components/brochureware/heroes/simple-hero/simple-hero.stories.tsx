import { Meta, StoryObj } from '@storybook/react';
import { withFullPage } from '../../../../storybook';
import SimpleHero from './simple-hero';

const componentDescription = `
### Overview
The \`SimpleHero\` component is a simple landing page header with a call-to-action (CTA) and navigation links. It uses a gradient background with a blur effect and includes responsive design elements.

### Props
- \`innerContent\`: The content object containing \`title\`, \`subTitle\`, \`body\`, and \`tags\`.

### Example
\`\`\`
<SimpleHero 
  innerContent={{
    title: { content: 'Data to enrich your online business' },
    subTitle: { content: 'Pioneering the Future of Software Development' },
    body: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.'
  }}
/>
\`\`\`

### Notes
This component can be used as a hero section or a landing page header, providing a visually appealing introduction with navigation links and CTAs.
`;

const meta: Meta<typeof SimpleHero> = {
  title: 'brochureware/heroes/simple-hero',
  component: SimpleHero,
  decorators: [withFullPage],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
  argTypes: {
    innerContent: {
      description: 'The content object passed to the component',
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SimpleHero>;

const innerContent = {
  title: { content: 'Data to enrich your online business' },
  subTitle: { content: 'Pioneering the Future of Software Development' },
  body: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
};

/**
 * Default SimpleHero example.
 * Demonstrates a basic usage of the SimpleHero component.
 */
export const Default: Story = {
  args: {
    innerContent,
  },
};
