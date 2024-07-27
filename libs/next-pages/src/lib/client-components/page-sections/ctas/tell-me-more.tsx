'use client';
import { ContentContainer, IContent, InlineForm } from '@spwntch/react-ui';

type Props = { content: IContent };

const TellMeMore = ({ content }: Props) => {
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };
  return (
    <div className="flex-col pt-12 pb-28 bg-muted">
      <div className="container">
        <ContentContainer innerContent={header} />
        <InlineForm className="max-w-4xl mx-auto" />
      </div>
    </div>
  );
};

export default TellMeMore;
