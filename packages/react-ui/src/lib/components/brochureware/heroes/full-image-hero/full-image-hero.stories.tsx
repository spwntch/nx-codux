import { Meta, StoryObj } from '@storybook/react';
import { withFullPage } from '../../../../storybook';
import { FullImageHero } from './full-image-hero';
import {
  playBasic,
  playHeroMode,
  playLeft,
  playRight,
  playShort,
  playTall,
} from './full-image-hero.specs';

const componentDescription = `
### Overview
The \`FullImageHero\` component displays a background image with optional darkening, with content centered horizontally and vertically. The height of the component can be customized with various units such as pixels, percentages, and viewport heights. Without a specified height, the component behaves as a fullscreen hero section.

### Props
- \`className\`: Additional class name(s) for the component.
- \`image\`: The image object containing the \`src\`, \`alt\`, and \`darken\` properties.
- \`innerContent\`: The content object containing \`title\`, \`subTitle\`, \`body\`, and \`tags\`.
- \`hAlign\`: The horizontal alignment of the content (\`left\`, \`center\`, \`right\`).
- \`vAlign\`: The vertical alignment of the content (\`top\`, \`middle\`, \`bottom\`).
- \`height\`: The height of the component, which can be specified in various units (e.g., \`480px\`, \`40%\`, \`50vh\`).

### Example
\`\`\`
<FullImageHero 
  image={{ src: '/path/to/image.jpg', darken: true }}
  innerContent={{
    title: { content: 'Welcome to Spawntech' },
    subTitle: { content: 'Pioneering the Future of Software Development' },
    tags: ['DevOps', 'UX/UI', 'Lean Innovation', 'Node.js']
  }}
  className="text-white"
  hAlign="center"
  height="300px"
/>
\`\`\`

### Notes
This component is flexible and can be used in various sections of a webpage to enhance the visual appeal by adding a background image.
`;

const meta: Meta<typeof FullImageHero> = {
  title: 'brochureware/heroes/full-image-hero',
  component: FullImageHero,
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
    image: {
      description: 'The image object passed to the component',
      control: 'object',
    },
    innerContent: {
      description: 'The content object passed to the component',
      control: 'object',
    },
    className: {
      description: 'Additional class name(s) for the component',
      control: 'text',
    },
    hAlign: {
      description: 'Horizontal alignment of the content',
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    vAlign: {
      description: 'Vertical alignment of the content',
      control: 'select',
      options: ['top', 'middle', 'bottom'],
    },
    height: {
      description:
        'Height of the component in various units (e.g., 480px, 40%, 50vh)',
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof FullImageHero>;

const image = {
  src: '/images/guy-sitting-at-tech-control-station.webp',
  alt: 'Guy sitting at tech control station',
  darken: true,
};

const innerContent = {
  title: { content: 'Welcome to Spawntech' },
  subTitle: { content: 'Pioneering the Future of Software Development' },
  tags: ['DevOps', 'UX/UI', 'Lean Innovation', 'Node.js'],
};

/**
 * Default FullImageHero example.
 * Demonstrates a basic usage of the FullImageHero component with centered content.
 */
export const Default: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
  },
  play: playBasic,
};

/**
 * Left Aligned Content.
 * Demonstrates the FullImageHero component with left aligned text content.
 */
export const LeftAligned: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    hAlign: 'left',
  },
  play: playLeft,
};

/**
 * Right Aligned Content.
 * Demonstrates the FullImageHero component with right aligned text content.
 */
export const RightAligned: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    hAlign: 'right',
  },
  play: playRight,
};

/**
 * Top Aligned Content.
 * Demonstrates the FullImageHero component with top aligned text content.
 */
export const TopAligned: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    vAlign: 'top',
  },
  // play: playTop
};

/**
 * Bottom Aligned Content.
 * Demonstrates the FullImageHero component with bottom aligned text content.
 */
export const BottomAligned: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    vAlign: 'bottom',
  },
};

/**
 * Bottom Left Hero Mode.
 * Demonstrates the FullImageHero component with bottom-left aligned text content in hero mode.
 */
export const BottomLeftAligned: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    hAlign: 'left',
    vAlign: 'bottom',
  },
};

/**
 * Short FullImageHero.
 * Demonstrates the FullImageHero component with a height of 320px.
 */
export const AsHeader: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    height: '320px',
  },
  play: playShort,
};
