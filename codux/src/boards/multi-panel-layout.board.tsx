import { Card, MultiPanelLayout } from '@/react-ui';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
  name: 'Multi-Panel Layout',
  Board: () => <div className='w-screen h-screen'>
    <MultiPanelLayout
  containers={[
    <div className="bg-blue-200 h-full w-full flex items-center justify-center"><Card className="p-4">Main Block Content</Card></div>,
    <div className="bg-green-200 h-full w-full flex items-center justify-center"><Card className="p-4">Sub Block 1 Content</Card></div>,
    <div className="bg-yellow-200 h-full w-full flex items-center justify-center"><Card className="p-4">Sub Block 2 Content</Card></div>,
    <div className="bg-red-200 h-full w-full flex items-center justify-center"><Card className="p-4">Sub Block 3 Content</Card></div>
  ]}
 />
  </div>,
  isSnippet: true,
});
