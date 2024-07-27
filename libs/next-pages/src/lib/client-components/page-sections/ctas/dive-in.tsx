'use client';
import {
  IContent,
  SimpleJustifiedBanner
} from '@spwntch/react-ui';

type Props = { content: IContent };

const DiveIn = ({ content }: Props) => {
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };
  return (
    <div className="flex-col pt-12 pb-28">
      <div className="container">
        <SimpleJustifiedBanner innerContent={content} />
      </div>
    </div>
  );
};

export default DiveIn;
