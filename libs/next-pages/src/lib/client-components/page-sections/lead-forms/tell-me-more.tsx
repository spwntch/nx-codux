'use client';
import { ContentContainer, IContent } from '@spwntch/react-ui';

type Props = { content: IContent };

const TellMeMore = ({ content }: Props) => {
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };
  return (
    <div className="flex-col py-12">
      <ContentContainer innerContent={header}  />
    </div>
  );
};

export default TellMeMore;
