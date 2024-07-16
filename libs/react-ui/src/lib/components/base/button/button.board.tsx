import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Button from './button';

export default createBoard({
  name: 'Button',
  Board: () => (
    <div>
      <Button>CLICK ME</Button>
    </div>
  ),
  isSnippet: true,
});
