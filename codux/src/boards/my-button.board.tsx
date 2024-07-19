import { createBoard } from '@wixc3/react-board';
import { MyButton } from '@spwntch/react-ui';

export default createBoard({
  name: 'MyButton',
  Board: () => <MyButton>Click me</MyButton>,
  isSnippet: true,
});
