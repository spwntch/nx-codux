import { Card, ImageContainer } from '@spwntch/react-ui';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
  name: 'Image Container',
  Board: () => (
    <div className="h-screen w-screen">
      <ImageContainer
        image={{
          alt: 'Guy sitting at tech control station',
          darken: true,
          src: '/spwn/images/public/guy-sitting-at-tech-control-station.webp',
        }}
      >
        <div className="h-full flex items-center justify-center">
          <Card className="p-4 opacity-75">Your Content Here</Card>
        </div>
      </ImageContainer>
    </div>
  ),
  isSnippet: true,
  tags: ['ui'],
});
