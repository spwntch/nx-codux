'use client';
import { cn, IContent, SimpleJustifiedBanner } from '@spwntch/react-ui';

type Props = { content: IContent; className?: string; onCtaClick: () => void };

const DiveIn = ({ content, className, onCtaClick }: Props) => {
  return (
    <div className={cn('flex-col pt-12 pb-28 ', className)}>
      <div className="container">
        <SimpleJustifiedBanner innerContent={content} onCtaClick={onCtaClick} />
      </div>
    </div>
  );
};

export default DiveIn;
