import { createBoard } from '@wixc3/react-board';

export default createBoard({
  name: 'App Shell',
  Board: () => <div></div>,
  isSnippet: true,
});
