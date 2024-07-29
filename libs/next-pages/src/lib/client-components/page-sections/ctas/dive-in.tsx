'use client';
import { IContent, SimpleJustifiedBanner } from '@spwntch/react-ui';

type Props = { content: IContent; onCtaClick: () => void };

const DiveIn = ({ content, onCtaClick }: Props) => {
  return (
    <div className="flex-col pt-12 pb-28 ">
      <div className="container">
        <SimpleJustifiedBanner innerContent={content} onCtaClick={onCtaClick} />
      </div>
    </div>
  );
};

export default DiveIn;
