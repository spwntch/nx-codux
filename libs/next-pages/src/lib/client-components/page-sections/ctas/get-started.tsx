'use client';
import { cn, ContentContainer, IContent, InlineForm } from '@spwntch/react-ui';

type Props = { id: string; content: IContent; className?: string };

const GetStarted = ({ id, content, className }: Props) => {
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };
  return (
    <div id={id} className={cn('flex-col pt-12 pb-28 ', className)}>
      <div className="container">
        <ContentContainer innerContent={header} />
        <InlineForm
          submitButton={{ label: 'GET STARTED NOW' }}
          className="max-w-4xl mx-auto"
        />
      </div>
    </div>
  );
};

export default GetStarted;
