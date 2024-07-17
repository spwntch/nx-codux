import { createBoard } from '@wixc3/react-board';
import { Badge } from '../../../libs/react-ui/src/lib/components/shadcn-ui/badge';
import { Button } from '../../../libs/react-ui/src';

export default createBoard({
  name: 'shadcn-ui-components',
  Board: () => (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex gap-2">
        <Badge variant="default">Category 1</Badge>
        <Badge variant="default">Category 2</Badge>
      </div>

      <div className="flex gap-2">
        <Button variant="default">CLICK ME</Button>
        <Button variant="secondary">CLICK ME</Button>
        <Button variant="outline">CLICK ME</Button>
        <Button variant="ghost">CLICK ME</Button>
      </div>
    </div>
  ),
  isSnippet: true,
});
