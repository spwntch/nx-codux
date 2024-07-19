import { createBoard } from '@wixc3/react-board';
import { ShellProvider, Logo } from '@spwntch/react-ui';
import { brand } from '../config';

export default createBoard({
  name: 'Landing Page',
  Board: () => (
    <ShellProvider brand={brand}>
      <Logo />
    </ShellProvider>
  ),
  isSnippet: true,
  environmentProps: {
    windowWidth: 1024,
    windowHeight: 768,
  },
  tags: ['page'],
});
