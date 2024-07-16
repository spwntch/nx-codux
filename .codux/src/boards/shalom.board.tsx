import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Page from '../../../apps/site/app/page';

export default createBoard({
  name: 'Shalom',
  Board: () => (
    <div>
      <Page />
    </div>
  ),
  isSnippet: true,
});
