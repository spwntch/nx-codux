'use client';
import { ContentContainer, IContent, InlineForm } from '@spwntch/react-ui';

type Props = { content: IContent };

const GetStarted = ({ content }: Props) => {
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };
  return (
    <div className="flex-col pt-12 pb-28 ">
      <div className="container">
        <ContentContainer innerContent={header} />
        <InlineForm className="max-w-4xl mx-auto" />
      </div>
    </div>
  );
};

export default GetStarted;
