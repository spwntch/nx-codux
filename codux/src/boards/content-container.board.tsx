import { Button, ContentContainer } from '@spwntch/react-ui';
import { createBoard } from '@wixc3/react-board';
import React from 'react';

export default createBoard({
  name: 'Content Container',
  Board: () => (
    <ContentContainer
      hAlign="center"
      innerContent={{
        announcement: {
          href: '/news',
          message: 'Spawntech is transforming software development',
        },
        body: [
          'Spawntech pioneers transformative software development, blending advanced DevOps, precise UX implementation, and customized development with reusable packages. Our approach integrates the latest technologies to ensure robust and scalable solutions that meet the evolving needs of our clients. By utilizing a comprehensive library of reusable packages, we can accelerate the development process and maintain high standards of quality and performance.',
        ],
        bullets: [
          {
            body: 'Combining lean UX philosophies with agile and innovative methodologies.',
            emoji: '🚀',
            title: 'Custom Software Development',
          },
          {
            body: 'Implementing advanced DevOps practices to streamline development and reduce time-to-market.',
            emoji: '⭐',
            title: 'DevOps and Lean CI/CD',
          },
          {
            body: 'Ensuring high standards of quality and performance through continuous improvement.',
            emoji: '🔧',
            title: 'Technical Excellence',
          },
        ],
        subTitle:
          'Pioneering a transformative approach to software development',
        tags: ['DevOps', 'UX/UI', 'Lean Innovation', 'Node.js'],
        title: 'Spawntech Company Overview',
      }}
      vAlign="middle"
    >
      <React.Fragment key=".0">
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </React.Fragment>
    </ContentContainer>
  ),
  isSnippet: true,
  tags: ['ui'],
});
