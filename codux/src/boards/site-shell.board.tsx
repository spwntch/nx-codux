import { createBoard } from '@wixc3/react-board';
import { Shell } from '@/next-shell';

export default createBoard({
  name: 'Site Shell',
  Board: () => <Shell>ping</Shell>,
  isSnippet: true,
});
