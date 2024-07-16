import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Index from '../../../../apps/site/app/page';

export default createBoard({
  name: 'Index',
  Board: () => <Index />,
  isSnippet: true,
});
