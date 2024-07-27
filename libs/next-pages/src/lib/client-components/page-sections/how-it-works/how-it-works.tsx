'use client';
import { ContentContainer, IContent } from '@spwntch/react-ui';

type Props = { content: IContent };

const HowItWorks = ({ content }: Props) => {
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };
  return (
    <div className="flex-col pt-12 pb-28 bg-muted">
      <div className="container">
        <ContentContainer innerContent={header} />
      </div>
    </div>
  );
};

export default HowItWorks;
